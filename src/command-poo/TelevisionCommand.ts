import type { Television } from "./Television";


export type TelevisionCommand = (tv: Television) => Television;
export const toggle: TelevisionCommand = (tv) => tv.toggle();
export const volumeUp: TelevisionCommand = (tv) => tv.updateVolume(1);
export const volumeDown: TelevisionCommand = (tv) => tv.updateVolume(-1);
