/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { makeAutoObservable } from 'mobx';
import { heroes as baseHeroes } from './data';

const CHUNK = 24;
export class LOTRStore {
  from = '';

  to = '';

  constructor() {
    makeAutoObservable(this);
  }

  changeFilter(key: 'from' | 'to', value: string) {
    this[key] = value;
  }

  get heroes() {
    return sortedHeroesList
      .filter(hero => {
        if (!this.from) {
          return true;
        }
        return compare(hero.number!, this.from, 'gte');
      })
      .filter(hero => {
        if (!this.to) {
          return true;
        }
        return compare(hero.number!, this.to, 'lte');
      });
  }

  get heroesChunks() {
    type T = typeof this.heroes;
    return this.heroes.reduce<T[]>((acc, item) => {
      const chunk = acc[acc.length - 1];
      if (!chunk || chunk.length === CHUNK) {
        acc[acc.length] = [item];
      } else {
        chunk.push(item);
      }

      return acc;
    }, []);
  }
}

const toNumbers = (v: string) =>
  v
    .split('.')
    .filter(Boolean)
    .map(x => (x.length === 1 ? `${x}0` : x))
    .map(Number);
const compare = (a: string, b: string, compareType: 'gte' | 'lte') => {
  const [a1, a2] = toNumbers(a);
  const [b1, b2] = toNumbers(b);
  if (a1 === b1) {
    if (a2 === undefined || b2 === undefined) {
      return true;
    }
    if (Number.isNaN(a2) || Number.isNaN(b2)) {
      return true;
    }
    return compareNumbers(a2, b2, compareType);
  }
  return compareNumbers(a1, b1, compareType);
};

const compareNumbers = (a: number, b: number, compareType: 'gte' | 'lte') => {
  if (compareType === 'gte') {
    return a >= b;
  }

  return a <= b;
};

const sortedHeroesList = baseHeroes.list.sort((a, b) => {
  return String(a.number) > String(b.number) ? 1 : -1;
});

export const lotrStore = new LOTRStore();
