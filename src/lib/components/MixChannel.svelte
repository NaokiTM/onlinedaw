<script lang="ts">
    export let min = 0;
    export let max = 150;
    export let value = 100;
</script>

<div class="flex flex-col gap-4 items-center">

    <!-- Value display
    <span id="slider-value" class="w-8 text-center text-black font-bold">{value}</span> -->

    <!-- Level Indicator and adjuster -->
    <div class="flex items-center gap-4">


        <!-- Vertical slider -->
        <input
        type="range"
        style="writing-mode: vertical-rl;"
        min={min}
        max={max}
        bind:value
        class="custom-thumb"
        />

        <!-- level meters -->
        <div class="flex items-center gap-0 h-32">
        <!-- left -->
        <div id="left-meter" class="w-2 bg-[#353535] h-32"></div>
        <!-- Seperator -->
        <div class="w-0.5 bg-black h-32"></div>
        <!-- right -->
        <div id="right-meter" class="w-2 bg-[#353535] h-32"></div>
        </div>
    </div>

    <!-- Mute / Solo Buttons -->
    <div class="flex items-center gap-4">
        <!-- Mute Button -->
        <button class="
        h-5 
        w-5 
        flex
        items-center
        justify-center
        font-bold
        text-black
        border-1
        rounded-[3px]
        bg-[radial-gradient(circle,_#0767B5,_#032D4F)] 
        cursor-pointer
        hover:brightness-150"
        >M</button>

        <!-- Solo Button -->
        <button class="
        h-5 
        w-5
        flex
        items-center
        justify-center
        font-bold
        text-black
        border-1
        rounded-[3px]
        bg-[radial-gradient(circle,_#B89D14,_#524609)] 
        cursor-pointer
        hover:brightness-150">S</button>
    </div>
</div>

<style>
    .custom-thumb {
        writing-mode: vertical-rl;
        rotate: 180deg;
        width: 5px;
        height: 125px;
        background: #191919;
    }   

    .custom-thumb::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 35px;
        height: 50px;
        background: linear-gradient(#AAAAAA 70%, #444444 100%);
        cursor: pointer;
        clip-path: polygon(25% 25%, 75% 25%, 65% 50%, 75% 75%, 25% 75%, 35% 50%);
    }

    .custom-thumb::-moz-range-thumb {
        width: 35px;
        height: 50px;
        background: linear-gradient(#AAAAAA 70%, #444444 100%);
        cursor: pointer;
        clip-path: polygon(25% 25%, 75% 25%, 65% 50%, 75% 75%, 25% 75%, 35% 50%);
    }
</style>