<!-- BAR FOR TRACK CONTROLS (PLAY, PAUSE, RECORD ETC.) -->

<script>
// @ts-nocheck
    import back from '$lib/assets/back.png'
    import play from '$lib/assets/play.png'
    import metronome from '$lib/assets/metronome.png'
    import skip from '$lib/assets/skip.png'
    import pause from'$lib/assets/pause.png'
    import record from'$lib/assets/record.png'
</script>

<nav class="bg-neutral-700 text-white space-x-2 flex items-center text-sm p-2">

    <!-- track controls -->
     <div class="flex-1 flex justify-center">
        <div class="bg-neutral-900 p-2 space-x-2 flex w-fit" >
            <button class="border-none p-0">
                <img src='{record}' alt='record' class="block w-6 h-6">
            </button>
            <button>
                <img src='{play}' alt='back' class="block w-6 h-6">
            </button>
            <button>
                <img src='{pause}' alt='play' class="block w-6 h-6">
            </button>
            <button>
                <img src='{back}' alt='record' class="block w-6 h-6">
            </button>
            <button>
                <img src='{skip}' alt='skip'class="block w-6 h-6">
            </button>
            <button>
                <img src={metronome} alt='metronome' class="block w-6 h-6">
            </button>
        </div> 
     </div>


    <!-- track information -->
     <div class="flex-1 justify-center flex">
        <div class="bg-sky-900 flex text-sky-500 p-1 w-fit">
            <div class="flex flex-col">
                <div class="text-3xl">002</div>
                <div class="text-xs text-center">bar</div>
            </div>
            <div class="border-sky-800 border-1 ml-1 mr-1 items-center"></div>
            <div class="flex flex-col">
                <div class="text-3xl">10</div>
                <div class='text-xs text-center'>beat</div>
            </div>
            <div class="border-sky-800 border-1 ml-1 mr-1"></div>
            <div class="flex flex-col">
                <div class="text-3xl text-center">120</div>
                <!-- <div class="text-center text-xs">keep</div> -->
                <div class="text-xs text-center">tempo</div>
            </div>
            <div class="border-sky-800 border-1 ml-1 mr-1"></div>
            <div class="flex flex-col justify-between">
                <div class="text-xl text-center">4/4</div>
                <div class="text-xl text-center">Cmaj</div>
            </div>
        </div>
     </div>

        <div class="flex-1">
        </div>

</nav>

<style>
    /* img {
        scale: 50%;
    } */
</style>