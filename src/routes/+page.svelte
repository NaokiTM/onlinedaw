<script>
  import Controlbar from "$lib/components/Controlbar.svelte";
  import Menubar from "$lib/components/Menubar.svelte";
  import Mixingdeck from "$lib/components/Mixingdeck.svelte";
  import Tracks from "$lib/components/Tracks.svelte";
  import { mixingDeckHidden } from "$lib/stores";
</script>

<div class="flex flex-col h-screen select-none">
    <Menubar></Menubar>
    <Controlbar></Controlbar>
    <Tracks></Tracks>
    {#if !$mixingDeckHidden}
        <Mixingdeck></Mixingdeck>
    {/if}
</div>

<style>
    :global(body) {
        background-color: black;
    }
</style>