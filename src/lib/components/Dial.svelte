<script lang="ts">
    import { onMount } from "svelte";

      let dial: HTMLElement;
      let holding = false;
      let dialCenter = { x: 0, y: 0 };


        //Onmount required since script runs before DOM created and thinks dial is null
        onMount (() => {
            let dialBoundingRect = dial.getBoundingClientRect()

            dialCenter = {
                //distance to center = distance from edge of viewport + half the width or height of the dial (since center lies at halfway point)
                x: dialBoundingRect.left + dialBoundingRect.width/2, 
                y: dialBoundingRect.top + dialBoundingRect.height/2
            }
        })

        function moveDial(e: MouseEvent) {
            if (!holding) return //Cant move dial if mb isnt being held


            //Calculates angle between x axis and vector line(center of dial to mouse position). 
            //We use the atan2 function, which takes the x and y distance from center to mouse position as arguments and returns angle (in radians)
            //Then use * (180 / Math.PI) to convert radians to degrees
            //taken from: https://stackoverflow.com/questions/15653801/rotating-object-to-face-mouse-pointer-on-mousemove
            let angle = Math.atan2(e.pageX - dialCenter.x, - (e.pageY - dialCenter.y)) * (180 / Math.PI)
            console.log(angle)
            dial.style.transform = `rotate(${angle}deg)`;  
        }
        
        function startHolding() {
            holding = true
        }

        function stopHolding() {
            holding = false
        }
 
</script>

<div class="flex justify-center mb-3">
    <div bind:this={dial}
    on:mousedown={startHolding}
    on:mouseleave={stopHolding}
    on:mouseup={stopHolding}
    on:mousemove={moveDial}
    class="dial rounded-4xl bg-neutral-700 h-8 w-8"></div>
</div>


<style>
.dial {
    position: relative; /* so pseudo-element is positioned inside */
}

.dial::before {
    content: ""; /* required for pseudo-elements */
    position: absolute;
    width: 2px;       /* small indicator size */
    height: 10px;
    background-color: white;
    
    /* place it near the top-center of the dial */
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
}
</style>