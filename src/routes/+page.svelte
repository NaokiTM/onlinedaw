<script>
  import Controlbar from "$lib/components/Controlbar.svelte";
  import Menubar from "$lib/components/Menubar.svelte";
  import Trackoptions from "$lib/components/track/Trackoptions.svelte";
  import Trackbars from "$lib/components/track/Trackbars.svelte";
  import Trackheader from "$lib/components/track/Trackheader.svelte";
  import Trackbody from "$lib/components/track/Trackbody.svelte";
  import Mixingdeck from "$lib/components/Mixingdeck.svelte";
  import Tracks from "$lib/components/track/Tracks.svelte";
</script>

<div class="flex flex-col">
    <Menubar></Menubar>
    <Controlbar></Controlbar>
    <Tracks></Tracks>
    <Mixingdeck></Mixingdeck>
</div>

<style>
    :global(body) {
        background-color: black;
    }
</style>