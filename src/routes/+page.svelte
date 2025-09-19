<script>
  import Controlbar from "$lib/components/Controlbar.svelte";
  import Menubar from "$lib/components/Menubar.svelte";
  import Mixingdeck from "$lib/components/Mixingdeck.svelte";
</script>

<div class="flex flex-col">
    <Menubar></Menubar>
    <Controlbar></Controlbar>
    <Mixingdeck></Mixingdeck>
</div>

<style>
    :global(body) {
        background-color: black;
    }
</style>