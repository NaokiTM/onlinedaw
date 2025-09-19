import { writable } from "svelte/store";

export const TracksArray = writable([
    {id: 0, instrument: "piano", muted: false } //Store all the track information in this array. 
]);