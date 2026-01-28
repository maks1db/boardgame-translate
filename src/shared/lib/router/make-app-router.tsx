/* eslint-disable jsx-a11y/anchor-has-content */
import {
  createContext,
  type FC,
  useMemo,
  type ReactNode,
  createElement,
  type AnchorHTMLAttributes,
} from 'react';

import type { History } from 'history';
import { observer } from 'mobx-react-lite';
import { Router, type AddRouteParams } from './router';
import { makeLocalStoreProvider } from '../local-store-provider';

export const makeAppRouter = <Route extends string>(
  baseRoutes: Record<Route, string>,
) => {
  const RouterContext = createContext<Router<Route> | null>(null);

  const { StoreProvider, useLocalStore: useRouter } = makeLocalStoreProvider({
    context: RouterContext,
    errorMessage: 'Не удалось инициализировать роутер',
  });

  const RouterProvider: FC<{
    children: ReactNode;
    history: History;
    routes: Record<Route, FC>;
  }> = ({ children, history, routes }) => {
    const concatRoutes = useMemo(
      () =>
        Object.entries(baseRoutes).reduce(
          (acc, [route, path]) => ({
            ...acc,
            [route]: {
              path,
              component: routes[route as unknown as Route],
            },
          }),
          {} as Record<Route, AddRouteParams>,
        ),
      [],
    );
    const router = useMemo(() => new Router(history, concatRoutes), []);
    return <StoreProvider store={router}>{children}</StoreProvider>;
  };
  interface RouteLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    to: Route;
    params?: Record<string, unknown>;
  }

  const RouteLink: FC<RouteLinkProps> = observer(
    ({ to, params, className, ...rest }) => {
      const router = useRouter();
      return (
        <a
          {...rest}
          href={router.pathname(to, params)}
          onClick={e => {
            e.preventDefault();
            router.to(to, params);
          }}
          onKeyUp={e => {
            e.preventDefault();
            router.to(to, params);
          }}
          className={className}
        />
      );
    },
  );

  const RouterComponent: FC = observer(() => {
    const router = useRouter();

    const Component = router.routeComponent;

    if (!Component) {
      return null;
    }

    return createElement(Component);
  });

  return { RouteLink, RouterProvider, useRouter, RouterComponent };
};
