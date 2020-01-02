<svelte:head>
	<title>Amazin - Send Amazon customers to their local store with one link</title>
</svelte:head>

<script>
	import { onMount } from 'svelte'
	import copy from 'copy-to-clipboard'
	import Tagline from '../components/Tagline.svelte'
	import { getASIN, getAffCode, isUrl } from '../helpers/url'

	// TODO
	// Custom text animation component
	// Responsive
	// Manifest logos etc
	// Favicon
	// Set up aff accounts for each country
	// Load them from a config file, apply to urls
	// Make the sizes bigger overall! (use rem)

	let input = ''
	let url
	let amazinRootUrl = 'https://amazin.donovanh.now.sh'
	let copied

	function generateUrl(event) {
	  const { value } = event.target
	  if (!value) return null

	  let affCode = getAffCode(value)
	  let asin = getASIN(value)

	  if (asin) {
	    url = `${amazinRootUrl}/${asin}${affCode ? `?tag=${affCode}` : ''}`
	  }
	}

	function copyUrl() {
	  copy(url)
	  copied = true
	  setTimeout(() => {
	    copied = false
	  }, 5000)
	}

	function reset() {
	  input = ''
	  url = null
	}

</script>

<article class="content">
	<h1 class="title"><span class="title-letter">A</span><span class="title-letter">M</span><span class="title-letter">A</span><span class="title-letter">Z</span><span class="title-letter">I</span><span class="title-letter">N</span></h1>
	{#if !url}
		<input type="text" name="text-input" bind:value={input} on:input={generateUrl} placeholder="Place your Amazon URL here..." />
		<Tagline />
	{:else}
		<p class="url" on:click={copyUrl}>
			<span class="click-to-copy">
				{#if copied}
					Copied to clipboard
				{:else}
					Click to copy
				{/if}
			</span>
			<code>{url}</code>
		</p>
		<p><strong>Done!</strong> You can now use your Amazin link to send customers to their local Amazon.</p>
		<button class="another" on:click={reset}>Make another</button>
	{/if}
</article>

<style>
	.content {
	  max-width: 840px;
	  width: 90%;
	  text-align: center;
	  margin: 0 auto;
	}
	.title {
	  font-size: 96px;
	  font-weight: 800;
	  height: 75px;
	  overflow: hidden;
	  margin-bottom: 0;
	  text-transform: uppercase;
	  z-index: 10;
	}
	.title-letter {
	  animation: show 1s cubic-bezier(0, 1, 0.3, 1) forwards;
	  transform: translateY(75px);
	  display: inline-block;
	  position: relative;
	}
	.title-letter:nth-child(1) {
	  animation-delay: 500ms;
	}
	.title-letter:nth-child(2) {
	  animation-delay: 550ms;
	}
	.title-letter:nth-child(3) {
	  animation-delay: 600ms;
	}
	.title-letter:nth-child(4) {
	  animation-delay: 650ms;
	}
	.title-letter:nth-child(5) {
	  animation-delay: 700ms;
	}
	.title-letter:nth-child(6) {
	  animation-delay: 750ms;
	}
	article {
	  flex-grow: 1;
	}
	input {
	  animation: show 500ms cubic-bezier(0.61, -0.61, 0.3, 1.44) forwards;
	  opacity: 0;
	  transform: scale(1.2);
	  display: block;
	  border-radius: 8px;
	  border: 4px solid #909;
	  font-size: 24px;
	  max-width: 512px;
	  margin: 10px auto;
	  padding: 10px 20px;
	  width: 90%;
	}
	.url {
	  animation: show 500ms cubic-bezier(0.61, -0.61, 0.3, 1.44) forwards;
	  transform: scale(1.2);
	  opacity: 0;
	  cursor: copy;
	  display: inline-block;
	  margin: 10px auto;
	  position: relative;
	}
	.click-to-copy {
	  border-radius: 0 0 8px 8px;
	  padding: 10px 10px 4px;
	  position: absolute;
	  background: rgba(255, 255, 255, 0.2);
	  bottom: 5px;
	  right: 12px;
	  transition: bottom 500ms cubic-bezier(1, 0, 0.12, 1.08);
	}
	.url:hover .click-to-copy {
	  bottom: -32px;
	  transition: bottom 500ms cubic-bezier(0, 1.3, 0.6, 1);
	}
	code {
	  background: #fff;
	  border: 4px solid #fff;
	  border-radius: 8px;
	  color: #000;
	  display: block;
	  font-size: 24px;
	  padding: 10px 20px;
	  position: relative;
	  min-width: 620px;
	}
	.url code::after {
	  animation: show 2s cubic-bezier(0.61, -0.61, 0.3, 1.44) forwards;
	  content: '✨';
	  opacity: 0;
	  transform: scale(0);
	  font-size: 24px;
	  position: absolute;
	  right: -24px;
	  top: -24px;
	}
	.another {
	  background: rgba(0, 0, 0, 0.5);
	  border: none;
	  border-radius: 8px;
	  color: #fff;
	  padding: 10px 20px;
	  font-size: 18px;
	}
</style>