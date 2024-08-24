import type { Television } from "./Television";
import type { TelevisionCommand } from "./TelevisionCommand";


export class Remote {
  connectedTv: Television | null = null;
  constructor(
    private actions: {
      toggle: TelevisionCommand;
      volumeUp: TelevisionCommand;
      volumeDown: TelevisionCommand;
    }
  ) { }
  click(button: "redbutton" | "volumeUp" | "volumeDown") {
    if (!this.connectedTv) return;
    switch (button) {
      case "redbutton": return this.actions.toggle(this.connectedTv);
      case "volumeUp": return this.actions.volumeUp(this.connectedTv);
      case "volumeDown": return this.actions.volumeDown(this.connectedTv);
    }
  }
  connectTo(tv: Television) {
    this.connectedTv = tv;
  }
}
