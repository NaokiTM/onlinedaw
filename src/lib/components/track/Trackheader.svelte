<script>

    //used to print out the instrument number in Tracks.svelte. can be deleted later this is just for testing purposes
    export let track
</script>


<div class="bg-neutral-600 w-full h-10 border-neutral-400 border-1 flex space-x-2">
    <div>Audio name</div>
    <div>id: {track.id}</div>
    <div>{track.instrument}</div>
    <div>muted: {track.muted}</div>
</div>