<!-- BAR FOR TRACK CONTROLS (PLAY, PAUSE, RECORD ETC.) -->

<script>
// @ts-nocheck
    import back from '$lib/assets/back.png'
    import play from '$lib/assets/play.png'
    import metronome from '$lib/assets/metronome.png'
    import skip from '$lib/assets/skip.png'
    import pause from'$lib/assets/pause.png'
    import record from'$lib/assets/record.png'
    import piano from '$lib/assets/piano.png'
    import loop from '$lib/assets/loop.png'

    import { isPlaying } from '$lib/stores'
    import { caretPos } from '$lib/stores'

    let lastTimestamp;
    let animationFrame;

    const speed = 100   //This is in pixels per second. This needs to be translated into tempo, and is NOT the tempo itself.

    function playTracks() {
        //First resets the boolean to false (in case its already true), and make it true again to run. 
        // idk why this works but it allows for clicking the play button multiple times 
        isPlaying.set(true);
        lastTimestamp = performance.now();    //What is this?
        animationFrame = requestAnimationFrame(nextCaretPos);    
    }

    function pauseTracks() {
        isPlaying.set(false);
        cancelAnimationFrame(animationFrame);
    }

    function rewindTracks() {
        isPlaying.set(false);
        cancelAnimationFrame(animationFrame);
        caretPos.set(0)
    }

    //Comment later i dont really get what this does in detail
    function nextCaretPos(timestamp) {        
        animationFrame = requestAnimationFrame(nextCaretPos);
        let toSeconds = (timestamp - lastTimestamp) / 1000; //Converts to seconds
        lastTimestamp = timestamp;

        caretPos.update(pos => pos + speed * toSeconds);
    }
</script>

<nav class="bg-[#AEAEAE] text-white space-x-2 flex items-center text-sm p-2">

    <!-- track controls -->
     <div class="flex-1 flex">
        <div class="flex flex-1">
        </div>
        <div class="bg-neutral-900 p-2 space-x-2 flex w-fit flex-shrink-0" >
            <button class="border-none p-0">
                <img src='{record}' alt='record' class="block w-6 h-6">
            </button>
            <button class="cassette-btn" on:click={playTracks}>
                <img src='{play}' alt='back' class="block w-4 h-4 mb-1.5">
                <span class="cassette-slot"></span>
            </button>
            <button class="cassette-btn" on:click={pauseTracks}>
                <img src='{pause}' alt='play' class="block w-4 h-4 mb-1.5">
                <span class="cassette-slot"></span>
            </button>
            <button class="cassette-btn" on:click={rewindTracks}>
                <img src='{back}' alt='record' class="block w-4 h-4 mb-1.5">
                <span class="cassette-slot"></span>
            </button>
            <button class="cassette-btn">
                <img src='{skip}' alt='skip'class="block w-4 h-4 mb-1.5">
                <span class="cassette-slot"></span>
            </button>
            <button>
                <img src='{loop}' alt='skip'class="block w-6 h-6">
            </button>
        </div> 
        <div class="flex-1">

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

        <div class="flex-1 flex justify-center">
            <!-- maybe add some other buttons here -->
        </div>

</nav>

<style>
    /* img {
        scale: 50%;
    } */

    .record-btn {
        /* all: unset; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        width: 30px;
        height: 35px;
        position: relative;

        background: rgb(127, 26, 26);

        border-top-left-radius: 2px;
        border-top-right-radius: 2px;

        clip-path: polygon(
            0 0,
            100% 0,
            100% 85%,
            90% 100%,
            10% 100%,
            0 85%
        );

        cursor: pointer;
    }

    .record-slot {
        width: 80%;
        height: 2.5px;
        background: linear-gradient(to bottom, #c41212 0%, #721717 48%);
        border-radius: 6px;
        box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.3);
        margin-bottom: 2px;
    }

    .cassette-btn {
        /* all: unset; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        width: 30px;
        height: 35px;
        position: relative;

        background: rgb(60, 59, 55);

        border-top-left-radius: 2px;
        border-top-right-radius: 2px;

        clip-path: polygon(
            0 0,
            100% 0,
            100% 85%,
            90% 100%,
            10% 100%,
            0 85%
        );

        cursor: pointer;
    }

    .cassette-slot {
        width: 80%;
        height: 2.5px;
        background: linear-gradient(to bottom, #706E67 0%, #33332F 48%);
        border-radius: 6px;
        box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.3);
        margin-bottom: 2px;
    }
</style>