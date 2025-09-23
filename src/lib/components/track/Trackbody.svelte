<script>
  import { noOfBars } from "$lib/stores";
</script>

<!-- The tracks entire body -->
<div class="bg-neutral-900 h-15 border-neutral-600 border-r-1 flex">  

  <!-- The segments in the tracks body representing the bars -->
    {#each Array.from({ length: $noOfBars }) as _, i}
        <div class="border-neutral-800 border-1 w-1/4 h-15 p-1 flex-shrink-0">
        </div>
    {/each}
</div>