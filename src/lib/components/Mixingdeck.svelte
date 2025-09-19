<script lang="ts">
  import { onMount } from 'svelte';
  import MixChannel from './MixChannel.svelte';

  let windowWidth = 0;
  const sliderWidth = 70; // total width of MixChannel component
  const gap = 5; // px gap between components

  let channels: number[] = [];

  function calculateSliders() {
    const totalWidthPerSlider = sliderWidth + gap;
    const count = Math.floor(windowWidth / totalWidthPerSlider);
    channels = Array(count).fill(100);
  }

  onMount(() => {
    windowWidth = window.innerWidth;
    calculateSliders();

    window.addEventListener('resize', () => {
      windowWidth = window.innerWidth;
      calculateSliders();
    });
  });
</script>

<div class="fixed bottom-0 w-full h-[30vh] bg-[#5C5B5B] flex justify-center items-center gap-5">
  {#each channels as val, i (i)}
    <MixChannel bind:value={channels[i]} />
  {/each}
</div>

<style>
</style>