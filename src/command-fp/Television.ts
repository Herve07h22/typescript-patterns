/* Elegant Object :
 * - a real objet
 * - few attributes
 * - immutable (attributes set by constructor, read-only in the methods)
 * */

export class Television {
  constructor(
    private owner: string,
    public volume: number = 0,
    public state: "on" | "off" = "off"
  ) {}
  updateVolume(by: number): Television {
    return new Television(this.owner, this.volume + by, this.state);
  }
  toggle(): Television {
    return new Television(
      this.owner,
      this.volume,
      this.state === "on" ? "off" : "on"
    );
  }
}

export const assertion =
  (predicate: (tv: Television) => void) => (tv: Television) => {
    predicate(tv);
    return tv;
  };
