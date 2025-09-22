<script>
    export let track  //Track is the variable containing the current track object (things unique to this track)
    import muted from '$lib/assets/muted.png'
    import unmuted from '$lib/assets/unmuted.png'
    import { toggleMute } from '$lib/stores';
    import Dial from '../Dial.svelte';

    function handleMute() {
        toggleMute(track.id)  //The actual toggleMute function is in stores.js
    }

</script>

<div class="bg-neutral-600 w-full h-15 border-neutral-400 border-1 flex space-x-2 relative">
    <div class="border-r-1 w-5 border-r-neutral-400 items-center justify-center flex">
        {track.id + 1}
    </div>
    <img src={track.instrumentIcon} alt='instrumentIcon' class="pb-2 pt-1 pl-1">
    <div class="flex flex-col pt-1">
        <div>{track.instrument}</div>
        <div class="flex flex-row">
            <button on:click={handleMute} class="hover:cursor-pointer w-5 h-5">
                <!-- Changes muted icon image depending on whether muted or not -->
                <img src={track.muted ? muted : unmuted} alt="mute">   
            </button>
            <input type="range" class="w-30">
        </div>
        <div class="absolute right-0 pr-1 pt-1">
            <div class="flex items-end">
                <div class="text-xs">L</div>
                <Dial></Dial>
                <div class="text-xs">R</div>
            </div>
        </div>
    </div>
</div>