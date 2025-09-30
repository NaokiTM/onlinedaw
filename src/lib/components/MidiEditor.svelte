
<script lang="ts">
    import EditorTrack from "./editor/EditorTrack.svelte";
    import { TracksArray } from "$lib/stores";
    import { caretPos } from "$lib/stores";
    import Trackbars from "./track/Trackbars.svelte";
    import Trackoptions from "./track/Trackoptions.svelte";
    import EditorKeys from "./editor/EditorKeys.svelte";
    import { onMount } from "svelte";

    let barsEl: HTMLDivElement;
    let keysEl: HTMLDivElement;
    let tracksEl: HTMLDivElement;

    onMount(() => {
        tracksEl.addEventListener("scroll", () => {
        // sync header and body vertical scrolling
        keysEl.scrollTop = tracksEl.scrollTop;

        //sync body and bar numbers when horizontally scrolling
        tracksEl.scrollLeft = barsEl.scrollLeft;
        });
    });

</script>


<div class="grid grid-cols-[20%_1fr] grid-rows-[auto_1fr] flex-1 text-white overflow-auto">

    <div class="sticky top-0 left-0 z-2 bg-neutral-400">  <!--sticks to the top and left to avoid any scroll interference-->
        
    </div>

    <div class="sticky top-0 z-10 bg-neutral-700 overflow-hidden" bind:this={barsEl}>
        <Trackbars />
    </div>

    <!-- piano -->
    <div class="sticky left-0 bg-neutral-800 overflow-hidden" bind:this={keysEl}>
        <EditorKeys />
    </div>


    <!-- loops through tracks --> 
    <div class="relative overflow-auto bg-neutral-900" bind:this={tracksEl}>

        <div class="h-full absolute w-[1px] bg-white" style="left: {$caretPos}px"></div>

        <!-- pass props to track body to identify it uniquely -->
        <EditorTrack />
    </div>
</div>