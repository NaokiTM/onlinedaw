

<script>
    import { noOfBars, whichMidiTrackOpen } from "$lib/stores";

    let trackIndex = whichMidiTrackOpen
    let clickedNoteIndex = null

    function handleNote() {
        // if note already exists then remove, if note doesnt exist then add. default length of 1 (fills the bar clicked on)
        

    }
</script>


{#each Array.from({ length: 8}) as _, i}

    <!-- EVERY 7 NOTES DOWN IT HIGHLIGHTS BORDER RED -->   
    {#each Array.from({ length: 6}) as _, i}
        <div class="bg-neutral-900 h-6 border-neutral-600 flex">
            <!-- loops through bars in tracks -->
            {#each Array.from({ length: $noOfBars}) as _, i}
                <div class="border-neutral-800 border-1 w-1/4 h-6 p-0 flex-shrink-0">
                    <button on:click={handleNote}></button>
                </div>
            {/each}
        </div>
    {/each}

    <div class="bg-neutral-900 h-6 w-full flex">
        <!-- loops through bars in tracks -->
        {#each Array.from({ length: $noOfBars}) as _, i}
                <div class="border-neutral-800 border-1 border-b-red-900 w-1/4 h-6 p-0 flex-shrink-0">
                    <button on:click={handleNote}></button>
                </div>
        {/each}
    </div>

    <!-- EVERY 5 NOTES DOWN IT HIGHLIGHTS BORDER RED -->
    {#each Array.from({ length: 4}) as _, i}
        <div class="bg-neutral-900 h-6 border-neutral-600 flex">
            <!-- loops through bars in tracks -->
            {#each Array.from({ length: $noOfBars}) as _, i}
                <div class="border-neutral-800 border-1 w-1/4 h-6 p-0 flex-shrink-0">
                    <button on:click={handleNote}></button>
                </div>
            {/each}
        </div>
    {/each}

    <div class="bg-neutral-900 h-6 flex">
        <!-- loops through bars in tracks -->
        {#each Array.from({ length: $noOfBars}) as _, i}
            <div class="border-neutral-800 border-1 border-b-red-900 w-1/4 h-6 p-0 flex-shrink-0">
                <button on:click={handleNote}></button>
            </div>
        {/each}
    </div>


{/each}



 