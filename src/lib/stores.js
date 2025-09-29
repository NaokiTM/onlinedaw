//This is where the "global" stuff is (functions and variables that are updated in multiple components)

import { writable } from "svelte/store";
import keys from '$lib/assets/keys.png'


//Need help differentiating if this sets the default header stuff when I create a new track, or if its the function in trackoptions.
export const TracksArray = writable([
  {
    id: 0,
    instrument: "keys",
    instrumentIcon: keys,
    muted: false,
    regions: [
      // {
      //   barNo: 0,
      //   length: 15,
      //   contents: "add some music here",
      // },
    ],
  },
]);

export const noOfBars = writable(8)   //Initial no. of bars
export const caretPos = writable(0)  //Initial position of the track caret
export const isPlaying = writable(false)   //Tracks whether the tracks are being played or not (and whether the caret should be moving)

export const currentBar = writable(1)   //bar number 1 (or zero for zero indexing purposes? idk)
export const currentBeat = writable(1)   //which beat the caret is above / playing
export const tempo = writable(120)
export const keySig = writable("c")  //root note for key sig
export const tonality = writable("major")   //major or minor key
export const accidental = writable("")  //is key signature sharp or flat
export const octave = writable(0) //how many octaves above base is the key (default none)
export const timeSig = writable("4/4")



export const mixingDeckHidden = writable(true)

//Toggle mute on a specific track
export function toggleMute(id) {
  TracksArray.update(tracks =>
    tracks.map(t => t.id === id ? { ...t, muted: !t.muted } : t)
  );
}

//Change instrument
export function setInstrument(id, instrument) {
  TracksArray.update(tracks =>
    tracks.map(t => t.id === id ? { ...t, instrument } : t)
  );
}
