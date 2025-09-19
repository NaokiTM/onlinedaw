<script>
  import Controlbar from "$lib/components/Controlbar.svelte";
  import Menubar from "$lib/components/Menubar.svelte";
  import Mixingdeck from "$lib/components/Mixingdeck.svelte";
  import Tracks from "$lib/components/track/Tracks.svelte";
</script>

<div class="flex flex-col h-screen select-none">
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