

<script>
    import { noOfBars } from "$lib/stores";
</script>


{#each Array.from({ length: 8}) as _, i}

    <!-- EVERY 7 NOTES DOWN IT HIGHLIGHTS RED -->   
    {#each Array.from({ length: 6}) as _, i}
        <div class="bg-neutral-900 h-6 border-neutral-600 flex">
            <!-- loops through bars in tracks -->
            {#each Array.from({ length: $noOfBars}) as _, i}
                <div class="border-neutral-800 border-1 w-1/4 h-6 p-0 flex-shrink-0"></div>
            {/each}
        </div>
    {/each}

    <div class="bg-neutral-900 h-6 w-full flex">
        <!-- loops through bars in tracks -->
        {#each Array.from({ length: $noOfBars}) as _, i}
                <div class="border-neutral-800 border-1 border-b-red-900 w-1/4 h-6 p-0 flex-shrink-0"></div>
        {/each}
    </div>

    <!-- EVERY 5 NOTES DOWN IT HIGHLIGHTS RED -->
    {#each Array.from({ length: 4}) as _, i}
        <div class="bg-neutral-900 h-6 border-neutral-600 flex">
            <!-- loops through bars in tracks -->
            {#each Array.from({ length: $noOfBars}) as _, i}
                <div class="border-neutral-800 border-1 w-1/4 h-6 p-0 flex-shrink-0"></div>
            {/each}
        </div>
    {/each}

    <div class="bg-neutral-900 h-6 flex">
        <!-- loops through bars in tracks -->
        {#each Array.from({ length: $noOfBars}) as _, i}
            <div class="border-neutral-800 border-1 border-b-red-900 w-1/4 h-6 p-0 flex-shrink-0"></div>
        {/each}
    </div>


{/each}



 