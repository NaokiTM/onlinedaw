<script>
    export let track  //Track is the variable containing the current track object (things unique to this track)
    import muted from '$lib/assets/muted.png'
    import unmuted from '$lib/assets/unmuted.png'
    import { toggleMute } from '$lib/stores';

    function handleMute() {
        toggleMute(track.id)
    }

</script>


<div class="bg-neutral-600 w-full h-15 border-neutral-400 border-1 flex space-x-2">
    <div>{track.instrument}</div>
    <div>Track name</div>
    <button on:click={handleMute}>
        <img src={track.muted ? muted : unmuted} alt="mute">     
    </button>
</div>