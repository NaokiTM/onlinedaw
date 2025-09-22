<script>
  import { noOfBars } from "$lib/stores";
</script>

<!-- The tracks entire body -->
<div class="bg-neutral-900 h-15 border-neutral-600 border-r-1 flex">  

  <!-- The segments in the tracks body representing the bars -->
    {#each Array.from({ length: $noOfBars }) as _, i}
        <div class="border-neutral-800 border-1 w-1/8 h-15 justify-end flex-1 items-center p-1">
        </div>
    {/each}
</div>