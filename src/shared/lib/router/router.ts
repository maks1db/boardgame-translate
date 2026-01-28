import { type History, type Location } from 'history';
import { createAtom, makeObservable, action } from 'mobx';
import type { FC } from 'react';
import { Mask } from './lib';

export class Router<Key extends string> {
  atom;

  private history;

  activeMask: string | null = '';

  routes;

  private unsubscribeFn: (() => void) | null = null;

  constructor(history: History, routes: Record<Key, AddRouteParams>) {
    this.history = history;
    this.routes = routes;
    makeObservable(this, {
      to: action,
      // routeComponent: computed,

      // location: computed,
      // routeParams: computed,
    });
    this.atom = createAtom(
      'Router',
      () => this.start(),
      () => this.destroy(),
    );
  }

  get location() {
    this.atom.reportObserved();
    return this.history.location;
  }

  pathname(route: Key, params?: Record<string, unknown>) {
    const mask = this.routes[route].path;

    return new Mask(mask).modify(params);
  }

  to(route: Key, params?: Record<string, unknown>) {
    const routeData = this.routes[route].path;
    const mask = new Mask(routeData);
    const path = mask.modify(params);

    this.history.push(path);
  }

  get routeComponent() {
    this.atom.reportObserved();
    const component =
      this.getRouteList().find(x => x.path === this.activeMask)?.component ||
      null;
    return component;
  }

  private getRouteList() {
    const values = Object.values(this.routes) as AddRouteParams[];
    return values;
  }

  start() {
    this.unsubscribeFn = this.history.listen(({ location }) => {
      this.updateRouter(location);
    });

    this.updateRouter(this.location);
  }

  updateRouter(loc: Location) {
    let updated = false;
    const list = this.getRouteList();
    list.forEach(({ path }) => {
      const mask = new Mask(path);
      if (mask.matched(loc.pathname)) {
        this.activeMask = path;
        updated = true;
      }
    });

    if (!updated) {
      this.activeMask = null;
    }

    this.atom.reportChanged();
  }

  get routeParams() {
    this.atom.reportObserved();
    if (!this.activeMask) {
      return null;
    }
    const mask = new Mask(this.activeMask);

    return mask.match(this.location.pathname);
  }

  destroy() {
    if (this.unsubscribeFn) {
      this.unsubscribeFn();
    }

    this.unsubscribeFn = null;
  }
}

export interface AddRouteParams {
  path: string;
  component: FC;
}
