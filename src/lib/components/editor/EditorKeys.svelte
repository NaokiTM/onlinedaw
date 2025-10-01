<div class="flex flex-col">
    {#each Array.from({ length: 32}) as _, i}
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
                <div class="h-10 bg-white border-b-red-800 border-1">
                    <button class="w-full h-full">button</button>
                </div>
            </div>

            <div class="space-y-6 absolute mt-7.5">
                <div class="h-5 w-50 bg-black"></div>
                <div class="h-5 w-50 bg-black"></div>
                <div class="h-5 w-50 bg-black"></div>
            </div>            
        </div>

        <!-- 1st variation -->
        <div class="flex">
            <div class="w-full">
                <div class="h-10 bg-white border-b-black border-1">
                    <button class="w-full h-full">button</button>
                </div>
                <div class="h-10 bg-white border-b-black border-1">
                    <button class="w-full h-full">button</button>
                </div>
                <div class="h-10 bg-white border-b-red-800 border-1 ">
                    <!-- 8 - i counts backwards, so as it displays the octaves, it displays them starting from 8 then down to 1 -->
                    <div class="text-black flex items-center h-full justify-end pr-2">C{8 - i}</div>  
                    <button class="w-full h-full">button</button>
                </div>
            </div>

            <div class="space-y-5 absolute mt-7.5">
                <div class="h-5 w-50 bg-black"></div>
                <div class="h-5 w-50 bg-black"></div>
            </div>
        </div>


    {/each}
</div>