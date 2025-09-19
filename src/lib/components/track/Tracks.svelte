<script>
    import { TracksArray } from "$lib/stores";
    import Trackoptions from "$lib/components/track/Trackoptions.svelte";
    import Trackbars from "$lib/components/track/Trackbars.svelte";
    import Trackheader from "$lib/components/track/Trackheader.svelte";
    import Trackbody from "$lib/components/track/Trackbody.svelte";
</script>


<!-- map all tracks here -->
<div class="flex flex-col text-white">                <!-- Shows bar number and looping information -->
    <div class="flex">
        <div class="flex-2">

            <!-- map track headers here -->
            <Trackoptions></Trackoptions>
            {#each $TracksArray as track (track.id)}
                <Trackheader track={track}></Trackheader>
            {/each}

        </div>
        <div class="flex-8">
            <!-- map track bodies here -->
            <Trackbars></Trackbars>  
            {#each $TracksArray}
                <Trackbody></Trackbody>
            {/each}
        </div>
    </div>
</div>