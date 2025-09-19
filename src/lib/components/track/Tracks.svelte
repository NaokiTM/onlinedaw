<script>
    import { TracksArray } from "$lib/stores";
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
        <div class="flex-8">
            <Trackbars></Trackbars>            
        </div>
    </div>
    <div class="flex overflow-y-auto">
        <div class="flex-2">
            {#each $TracksArray as track (track.id)}
                <Trackheader track={track}></Trackheader>   <!-- pass the track object for each track (may need to pass it to trackbody later for changing track colour on mute etc)-->
            {/each}
        </div>
        <div class="flex-8">
            {#each $TracksArray}
                <Trackbody></Trackbody>
            {/each}
        </div>
    </div>
</div>