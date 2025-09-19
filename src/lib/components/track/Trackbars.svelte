<script lang="ts">
    import minus from '$lib/assets/minus.png'
    import plus from '$lib/assets/plus.png'

    let noOfBars = 8
    $: bars = Array.from({length: noOfBars}) //$ makes it a reactive variable to allow changes to the array when bars are dynamically added / removed
</script>

<div class="h-5 w-full bg-neutral-700 flex">
  {#each bars as _, i}
    <div class="border-neutral-400 border-1 flex-1 h-5 flex justify-end items-center p-1">
      {i + 1}
    </div>
  {/each}
    <button onclick={() => noOfBars++} class='hover:cursor-pointer'>
        <img src={plus} alt='add' class="h-full">
    </button>

    <!-- the math.max bit subtracts 1 but keeps the value from going below 1 -->
    <button onclick={() => noOfBars = Math.max(1, noOfBars-1)} class='hover:cursor-pointer'>  
        <img src={minus} alt='remove' class="h-full">
    </button>

</div>