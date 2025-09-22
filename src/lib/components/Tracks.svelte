<script>
    import { TracksArray, caretPos} from "$lib/stores";
    import Trackoptions from "$lib/components/track/Trackoptions.svelte";
    import Trackbars from "$lib/components/track/Trackbars.svelte";
    import Trackheader from "$lib/components/track/Trackheader.svelte";
    import Trackbody from "$lib/components/track/Trackbody.svelte";
</script>

<div class="flex flex-col text-white flex-1 overflow-auto">
    <div class="flex">
        <div class="flex-2">
            <Trackoptions></Trackoptions>
        </div>

        <!-- Displays bar numbers above the tracks contents -->
        <div class="flex-8">
            <Trackbars></Trackbars>            
        </div>
    </div>
    <div class="flex overflow-y-auto">
        <div class="flex-2">
            {#each $TracksArray as track (track.id)}
                <Trackheader track={track}></Trackheader>   <!-- pass the track object for each track containing various attributes of each(may need to pass it to trackbody later for changing track colour on mute etc)-->
            {/each}
        </div>
        <div class="flex-8 relative">
            <!-- track caret -->
            <div class="h-full absolute w-[1px] bg-white" style="left: {$caretPos}px"></div>  

            <!-- Displays each tracks body / contents -->
            {#each $TracksArray}
                <Trackbody></Trackbody>
            {/each}
        </div>
    </div>
</div>