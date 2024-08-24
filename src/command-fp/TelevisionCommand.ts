import type { Television } from "./Television";

export type TelevisionCommand = (tv: Television) => Television;
const toggle = (tv: Television) => tv.toggle();
const volumeUp = (tv: Television) => tv.updateVolume(1);
const volumeDown = (tv: Television) => tv.updateVolume(-1);
// Dictionnaire de commandes
export const commands = {
    redbutton: toggle,
    volumeUp: volumeUp,
    volumeDown: volumeDown,
};
