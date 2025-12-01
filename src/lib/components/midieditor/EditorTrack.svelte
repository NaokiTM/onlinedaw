<script>
// @ts-nocheck
    import { noOfBars, whichMidiTrackOpen } from "$lib/stores";
    import NoteRegion from "./noteRegion.svelte";

    let trackIndex = whichMidiTrackOpen
    let clickedNoteIndex = null

    function handleNote(noteNo, barNo) {
        console.log("function ran")
        // if note already exists then remove, if note doesnt exist then add. default length of 1 (fills the bar clicked on)
        TracksArray.update(tracks => {
            const copy = [...tracks];
            const track = copy[trackIndex];

            const newRegion = {
              barNo: clickedBarIndex,
              length: 1,
              contents: "new notes"
            };

            track.regions = [...track.regions, newRegion];
            copy[clickedTrackIndex] = track;
            return copy;
        });
        
    }

    const groups = 8;
    const pattern = [6, 1, 4, 1];
    const rows = [];

    for (let g = 0; g < groups; g++) {
        let offset = g * 12;
        pattern.forEach((len, i) => {
        for (let r = 0; r < len; r++) {
            rows.push({
            index: offset + r,
            redBorder: (i === 1 && r === 0) || (i === 3 && r === 0)
            });
        }
        });
    }
</script>


{#each rows as { index, redBorder }}
  <div class="bg-neutral-900 h-6 flex" class:border-b-red-900={redBorder}>
    {#each Array.from({ length: $noOfBars }) as _, j}
      <div class="border-neutral-800 border-1 w-1/4 h-6 p-0 flex-shrink-0" on:click={() => handleNote(index, j)} >
        <!-- For each  -->
        {#each track.regions.filter(region => region.barNo === barIndex) as region} 
          <AudioRegion {region} />
        {/each}
      </div>
    {/each}
  </div>
{/each}



 