<script lang="ts">
    import minus from '$lib/assets/minus.png'
    import plus from '$lib/assets/plus.png'
    import { currentBar, noOfBars, caretHeaderWidth } from '$lib/stores';
    import { caretPos } from '$lib/stores';
  import { onMount } from 'svelte';
    $: bars = Array.from({length: $noOfBars}) //$ makes it a reactive variable to allow changes to the array when bars are dynamically added / removed

    let holding = false;
    let caretHeader: HTMLElement

    //This is required to set a default headerwidth asap to determine what bar we are initially on (in stores.js)
    onMount(() => {
        caretHeaderWidth.set(caretHeader.getBoundingClientRect().width);
        //for resize
        const resizeObserver = new ResizeObserver(() => {
          caretHeaderWidth.set(caretHeader.getBoundingClientRect().width);
        });
    });

    //update caret position while dragging with a mouse
    function moveCaret(e: MouseEvent) {
        if (!holding) return;

        const rect = caretHeader.getBoundingClientRect()
        $caretPos = e.clientX - rect.left;   //whole screen - left offset from edge of screen to left of caretHeader, which gives the correct x coords

        // //To update currentbar with the 
        // const barWidth = rect.width / 4;
        // $currentBar = Math.floor($caretPos / barWidth);
    }

    function startHolding() {
        holding = true
    }

    function stopHolding() {
        holding = false
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
    class="h-5 w-full bg-neutral-700 flex relative flex-shrink-0"
    onmouseleave={stopHolding}
    onmouseup={stopHolding}
    onmousemove={moveCaret}
    bind:this = {caretHeader}
>

    <!-- caret (top bit) -->
    <div 
        class="absolute -left-2.5 clipped-square h-5 w-5 bg-white hover:cursor-pointer" 
        style="left: {$caretPos - 10}px"
        onmousedown={startHolding}
    ></div>

    <!-- iteratively display bars on top of track body -->
    {#each bars as _, i}
        <div class="border-neutral-500 border-r-1 h-5 w-1/4 items-center flex p-1 flex-shrink-0 justify-end">

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