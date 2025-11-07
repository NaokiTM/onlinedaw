//This is where the "global" stuff is (functions and variables that are updated in multiple components)

import { derived, writable } from "svelte/store";
import keys from '$lib/assets/keys.png'


//Need help differentiating if this sets the default header stuff when I create a new track, or if its the function in trackoptions.
export const TracksArray = writable([
  {
    id: 0,
    instrument: "keys",
    instrumentIcon: keys,
    muted: false,
    regions: [
      {
        barNo: 0,
        length: 15,
        notes: [
          {noteId: 1, pos: 60, length: 1}   //pos is the number of keys down the note is (which note is being played out of the 8 octaves),length is the amount of space it takes  up in a bar
        ],
      },
    ],
  },
]);




//Global states for song information
export const noOfBars = writable(4)   //Initial no. of bars
export const tempo = writable(120)
export const keySig = writable("c")  //root note for key sig
export const tonality = writable("major")   //major or minor key
export const accidental = writable("")  //is key signature sharp or flat (default neither)
export const octave = writable(0) //how many octaves above base is the key (default none)
export const timeSig = writable("4/4")

//information about current state of the song
export const caretPos = writable(0)  //Initial position of the track caret
export const caretHeaderWidth = writable(1)


// export const currentBar = writable(1)   //bar number 1 (or zero for zero indexing purposes? idk)
export const currentBar = derived(
  // @ts-ignore
  [caretPos, caretHeaderWidth, noOfBars],
  // @ts-ignore
  ([$caretPos, $caretHeaderWidth, $noOfBars]) => {
    const barWidth = $caretHeaderWidth / $noOfBars;
    let index = Math.floor($caretPos / barWidth);
    index = Math.max(0, Math.min($noOfBars - 1, index)) + 1; //+1 for proper indexing
    return index;
  }
);


export const currentBeat = writable(1)   //which beat the caret is above / playing
export const isPlaying = writable(false)   //Tracks whether the tracks are being played or not (and whether the caret should be moving)
export const whichMidiTrackOpen = writable(null)  //stores which track is open in the midi editor. 0 if none of them open? 

//booleans for toggling extra editors
export const mixingDeckHidden = writable(true)
export const midiEditorHidden = writable(true)

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
