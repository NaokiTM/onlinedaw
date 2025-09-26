<script>
// @ts-nocheck
import { onMount } from "svelte";
import { noOfBars, TracksArray } from "$lib/stores";
import AudioRegion from "./AudioRegion.svelte";

export let track;        // current track object
export let trackIndex;   // index of this track

let showMenu = false;
let menuX = 0;
let menuY = 0;

// which bar and which track the user opened the menu in
let clickedTrackIndex = null;
let clickedBarIndex = null;

// right-click handler
function handleRightClick(e, trackIndex, barIndex) {
  let menuOffsetX = 285;
  let menuOffsetY = 132;

  e.preventDefault();
  showMenu = true;
  menuX = e.pageX - menuOffsetX;
  menuY = e.pageY - menuOffsetY;
  clickedTrackIndex = trackIndex;
  clickedBarIndex = barIndex;
}

// close menu when clicking elsewhere
onMount(() => {
  const closeMenu = () => (showMenu = false);
  document.addEventListener("click", closeMenu);
  return () => document.removeEventListener("click", closeMenu);
});

function addRegion() {
  TracksArray.update(tracks => {
    const copy = [...tracks];
    const track = copy[clickedTrackIndex];

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

function deleteRegion() {
  TracksArray.update(tracks => {
    const copy = [...tracks];
    const track = copy[clickedTrackIndex];

    track.regions = track.regions.filter(
      region => region.barNo !== clickedBarIndex
    );

    copy[clickedTrackIndex] = track;
    return copy;
  });
}
</script>

<!-- The track’s body -->
<!-- the double nested each is because it goes through each bar of each track to find the only bar that needs to contain a region -->
<div class="bg-neutral-900 h-15 border-neutral-600 border-r-1 flex">
  {#each Array.from({ length: $noOfBars }) as _, barIndex}
    <div
      class="border-neutral-800 border-1 w-1/4 h-15 p-0 flex-shrink-0"
      on:contextmenu={(e) => handleRightClick(e, trackIndex, barIndex)}
    >
      {#each track.regions.filter(region => region.barNo === barIndex) as region} 
        <AudioRegion {region} />
      {/each}
    </div>
  {/each}
</div>

<!-- Menu that shows when right clicked -->
{#if showMenu}
  <ul
    class="absolute bg-white text-black rounded shadow-md"
    style="top: {menuY}px; left: {menuX}px;"
  >
    <li class="px-4 py-2 hover:bg-gray-200" on:click={addRegion}>Add region</li>
    <li class="px-4 py-2 hover:bg-gray-200" on:click={deleteRegion}>Delete region</li>
  </ul>
{/if}
