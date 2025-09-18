<script>
  import Controlbar from "$lib/components/Controlbar.svelte";
  import Menubar from "$lib/components/Menubar.svelte";
</script>

<div class="flex flex-col">
    <Menubar></Menubar>
    <Controlbar></Controlbar>
</div>

<style>
    :global(body) {
        background-color: black;
    }
</style>