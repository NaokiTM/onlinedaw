import { writable } from "svelte/store";

export const TracksArray = writable([
    {id: 0, instrument: "piano", muted: false } //Store all the track information in this array. 
]);

export const noOfBars = writable(8)   //Initial no. of bars
export const caretPos = writable(0)  //Initial position of the track caret
export const isPlaying = writable(false)   //Tracks whether the tracks are being played or not (and whether the caret should be moving)
