import type { Television } from "./Television";
import type { TelevisionCommand } from "./TelevisionCommand";

type RemoteButton = "redbutton" | "volumeUp" | "volumeDown";
export const remote =
  (commandsMap: Record<RemoteButton, TelevisionCommand>) =>
  (button: RemoteButton) =>
  (tv: Television) =>
    commandsMap[button](tv);
