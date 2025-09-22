//This is where the "global" stuff is (functions and variables that are updated in multiple components)

import { writable } from "svelte/store";
import keys from '$lib/assets/keys.png'


//Need help differentiating if this sets the default header stuff when I create a new track, or if its the function in trackoptions.
export const TracksArray = writable([
    {id: 0, instrument: "keys", instrumentIcon: keys, muted: false } 
]);

export const noOfBars = writable(8)   //Initial no. of bars
export const caretPos = writable(0)  //Initial position of the track caret
export const isPlaying = writable(false)   //Tracks whether the tracks are being played or not (and whether the caret should be moving)

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
