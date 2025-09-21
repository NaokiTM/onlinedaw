<script>
  import { noOfBars } from "$lib/stores";
</script>

<div class="bg-neutral-900 h-10 w-[calc(100%-40px)] border-neutral-600 border-1 flex">
    {#each Array.from({ length: $noOfBars }) as _, i}
        <div class="border-neutral-800 border-1 flex-1 h-10 flex justify-end items-center p-1">
        </div>
    {/each}
</div>