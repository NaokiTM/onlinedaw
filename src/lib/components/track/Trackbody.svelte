<script>
  import { noOfBars } from "$lib/stores";
</script>

<div class="bg-neutral-900 border-neutral-600 border-1 flex">
    {#each Array.from({ length: $noOfBars }) as _, i}
        <div class="border-neutral-800 border-1 w-1/8 h-10 justify-end flex-1 items-center p-1">
        </div>
    {/each}
</div>