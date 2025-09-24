<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { noOfBars, TracksArray } from "$lib/stores";
    import AudioRegion from "./AudioRegion.svelte";


    let showMenu = false;
    let menuX = 0;
    let menuY = 0;

    //These 2 contain the track and bar number that were clicked on respectively
    let clickedTrackIndex = null;
    let clickedBarIndex = null;

    //sets the track and bar index to know which bar will be modified in which track, and the events x and y position
    function handleRightClick(e, trackIndex, barIndex) {

      //A crude solution to the menu not opening where click event happens - offset to ensure the top left corner of menu lines up with cursor
      //FIX ASAP
      let menuOffsetX = 285
      let menuOffsetY = 132

      e.preventDefault();
      showMenu = true;
      menuX = e.pageX - menuOffsetX
      menuY = e.pageY - menuOffsetY
      clickedTrackIndex = trackIndex;
      clickedBarIndex = barIndex;
    }

    //close menu when clicking elsewhere
    onMount(() => {
      const closeMenu = () => (showMenu = false)
      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    });

    
    function addRegion() {
      TracksArray.update(tracks => {
        //Create a copy of the track array, and defines 'track' as the track that was clicked on 
        const copy = [...tracks];   
        const track = copy[clickedTrackIndex]   

        // Define a new region
        const newRegion = {
          barNo: clickedBarIndex,
          length: 1,
          contents: "new notes"
        };

        //Add the object for the new region into the selected tracks regions array, and return  to TracksArray
        track.regions = [...track.regions, newRegion];
        copy[clickedTrackIndex] = track;
        return copy;
      });
    }

    function deleteRegion() {
      TracksArray.update(tracks => {

        //Create a copy of the track array, and defines 'track' as the track that was clicked on 
        const copy = [...tracks];
        const track = copy[clickedTrackIndex];

        //Filters out the region that lies at the bar specified by clickedBarIndex
        track.regions = track.regions.filter(region => region.barNo !== clickedBarIndex);

        //Creates a new copy of the updated track and returns it to be added to tracksarray
        copy[clickedTrackIndex] = track;
        return copy;
      });
    }
</script>

<!-- The tracks entire body -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="bg-neutral-900 h-15 border-neutral-600 border-r-1 flex" >  

  <!-- The segments in the tracks body representing the bars -->
  <!-- i represents each bar in the track -->
    {#each Array.from({ length: $noOfBars }) as _, i}
        <div 
          class="border-neutral-800 border-1 w-1/4 h-15 p-0 flex-shrink-0" 
          on:contextmenu={(e) => handleRightClick(e, 0, i)}  
        > 
          <!-- filters which region objects in the first track in tracksarray exist, and if they exist display them. -->
          {#each $TracksArray[0].regions.filter(region => region.barNo === i) as region}
            <AudioRegion {region} />
          {/each}
        </div>
    {/each}
</div>

<!-- pop up menu when right clicking on the track -->
<!-- menuy and menux display the menus top left corner where the event to open the menu happened-->
{#if showMenu}
  <ul
    class="absolute bg-white text-black rounded shadow-md"
    style="top: {menuY}px; left: {menuX}px;"  
  >
    <li class="px-4 py-2 hover:bg-gray-200" on:click={addRegion}>Add region</li>
    <li class="px-4 py-2 hover:bg-gray-200" on:click={deleteRegion}>Delete region</li>
  </ul>
{/if}