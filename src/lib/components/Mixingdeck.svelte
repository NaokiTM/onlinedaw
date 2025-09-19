<script lang="ts">
  import { onMount } from 'svelte';

  import Dial from './Dial.svelte';
  import MixChannel from './MixChannel.svelte';

  let windowWidth = 0;
  const channelWidth = 70; // total width of MixChannel component
  const gap = 5; // px gap between components

  let channels: number[] = [];  

  function calculateChannels() {
    const totalWidthPerChannel = channelWidth + gap;
    const count = Math.floor(windowWidth / totalWidthPerChannel);
    channels = Array(count).fill(100);
  }

  onMount(() => {
    windowWidth = window.innerWidth;
    calculateChannels();

    window.addEventListener('resize', () => {
      windowWidth = window.innerWidth;
      calculateChannels();
    });
  });
</script>

<div class="bottom-0 w-full h-[30vh] bg-[#5C5B5B] flex justify-center items-center gap-5">
  {#each channels as val, i (i)}
    <div class="">
      <Dial bind:value={channels[i]} />
      <MixChannel bind:value={channels[i]} />
    </div>
  {/each}
</div>

<style>
</style>