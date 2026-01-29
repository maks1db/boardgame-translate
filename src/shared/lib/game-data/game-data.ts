export class GameData<Item extends Record<string, unknown>> {
  private items: Item[] = [];

  add(item: Item) {
    this.items.push(item);
  }

  get list() {
    return this.items;
  }

  getUniq(key: keyof Item) {
    return Array.from(new Set(this.items.map(x => x[key])));
  }
}
