<script>
  import { fade } from 'svelte/transition'
  import { afterUpdate } from 'svelte'

  export let list
  export let delay

  let currentText = 0,
    text1,
    text2,
    hiddenText,
    width

  text1 = list[currentText]

  afterUpdate(async () => {
    width = hiddenText.clientWidth
  })

  setInterval(() => {
    if (currentText === list.length - 1) {
      currentText = 0
    } else {
      currentText++
    }
    if (text1) {
      text2 = list[currentText]
      text1 = null
    } else {
      text1 = list[currentText]
      text2 = null
    }
  }, delay)
</script>
<span class="wrapper" style="width:{`${width}px`}">
  {#if text1}
  <span class="text">{text1}</span>
  {:else}
  <span class="text">{text2}</span>
  {/if}
</span>
<span class="hidden-text" bind:this={hiddenText}>{text1 || text2}</span>

<style>
  .hidden-text {
    position: absolute;
    opacity: 0;
    top: -9999px;
    left: -9999px;
  }

  .wrapper {
    position: relative;
    display: inline-block;
    transition: width 800ms cubic-bezier(0.47, -0.73, 0.44, 1.6);
    transition: width 800ms cubic-bezier(0.47, -0.73, 0.44, 1.6);
    height: 24px;
  }

  .text {
    animation: show 400ms 300ms ease-out forwards;
    opacity: 0;
    position: absolute;
    left: 0;
  }
</style>