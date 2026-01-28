import { match } from 'path-to-regexp';

export class Mask {
  constructor(private mask = '') {}

  modify(data?: Record<string, unknown>) {
    if (!data) {
      return this.mask;
    }

    return Object.entries(data).reduce((acc, [key, value]) => {
      return acc.replace(`:${key}`, String(value));
    }, this.mask);
  }

  match(pathname: string) {
    return match(this.mask)(pathname);
  }

  matched(pathname: string) {
    return Boolean(match(this.mask)(pathname));
  }
}
