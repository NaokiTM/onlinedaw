<div class="flex flex-col">
    {#each Array.from({ length: 32}) as _, i}
    <!-- 1st variation -->
        <div class="flex">
            <div class="w-full">
                <div class="h-10 bg-white border-b-black border-1">
                    <button class="w-full h-full">button</button>
                </div>
                <div class="h-10 bg-white border-b-black border-1">
                    <button class="w-full h-full">button</button>
                </div>
                <div class="h-10 bg-white border-b-red-800 border-2">
                    <button class="w-full h-full">button</button>
                </div>
            </div>

            <div class="space-y-5 absolute mt-7.5">
                <div class="h-5 w-50 bg-black"></div>
                <div class="h-5 w-50 bg-black"></div>
            </div>
        </div>

        <!-- 2nd variation -->
        <div class="flex">
            <div class="w-full">
                <div class="h-10 bg-white border-b-black border-1">
                    <button class="w-full h-full">button</button>
                </div>
                <div class="h-11 bg-white border-b-black border-1">
                    <button class="w-full h-full">button</button>
                </div>
                <div class="h-11 bg-white border-b-black border-1">
                    <button class="w-full h-full">button</button>
                </div>
                <div class="h-10 bg-white border-b-red-800 border-2">
                    <button class="w-full h-full">button</button>
                </div>
            </div>

            <div class="space-y-6 absolute mt-7.5">
                <div class="h-5 w-50 bg-black"></div>
                <div class="h-5 w-50 bg-black"></div>
                <div class="h-5 w-50 bg-black"></div>
            </div>            
        </div>
    {/each}
</div>