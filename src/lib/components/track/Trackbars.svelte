<script lang="ts">
    import minus from '$lib/assets/minus.png'
    import plus from '$lib/assets/plus.png'
    import { noOfBars } from '$lib/stores';
    import { caretPos } from '$lib/stores';
    $: bars = Array.from({length: $noOfBars}) //$ makes it a reactive variable to allow changes to the array when bars are dynamically added / removed
</script>

<div class="h-5 w-full bg-neutral-700 flex relative flex-shrink-0">

    <!-- caret -->
    <div class="absolute -left-2.5 clipped-square h-5 w-5 bg-white" style="left: {$caretPos - 10}px"></div>

    <!-- iteratively display bars on top of track body -->
    {#each bars as _, i}
        <div class="border-neutral-500 border-r-1 h-5 w-1/4 items-center flex p-1 flex-shrink-0">

        <!-- print the bar number in each bar section (+1 to avoid zero indexing)-->
        {i + 1} 
        </div>
    {/each}

    <div class="fixed right-0 bg-gradient-to-r from-transparent to-neutral-900">
        <!-- Add bar -->
        <button onclick={() => $noOfBars++} class='hover:cursor-pointer'>
            <img src={plus} alt='add' class="h-full">
        </button>

        <!-- the math.max bit subtracts 1 but keeps the value from going below 1 -->
        <button onclick={() => $noOfBars = Math.max(1, $noOfBars-1)} class='hover:cursor-pointer'>  
            <img src={minus} alt='remove' class="h-full">
        </button>
    </div>


</div>

<style>

    /* Gives the caret the "pointer" look by cutting the 2 bottom corners diagonally*/
    .clipped-square {
        clip-path: polygon(
            0 0,      /* top-left */
            100% 0,   /* top-right */
            100% 50%, /* just above bottom-right */
            50% 100%, /* bottom-right cut */
            50% 100%, /* bottom-left cut */
            0 50%     /* just above bottom-left */
        );
    }

    
</style>