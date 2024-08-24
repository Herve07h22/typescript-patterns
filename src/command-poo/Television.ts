
export class Television {
  constructor(
    private owner: string,
    public volume: number = 0,
    public state: "on" | "off" = "off"
  ) {}
  updateVolume(by: number) {
    this.volume = this.volume + by;
    return this;
  }
  toggle() {
    this.state = this.state === "on" ? "off" : "on"
    return this;
  }
}
