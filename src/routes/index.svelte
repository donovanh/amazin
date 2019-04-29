<svelte:head>
	<title>Amazin Amazon Product Redirect Service</title>
</svelte:head>

<script>
	import { getASIN, getAffCode, isUrl } from '../helpers/url'
	// TODO
	// Add pages for: About Amazin
	// Add footer note with Amazon affiliate message
	// Add created by footer link to Hop.ie
	// How about a browser plugin :) - roadmap it
	// Animations to make people feel good
	// Nice logo
	// Manifest logos etc
	// Favicon

	let input = ''
	let url
	let amazinRootUrl = 'https://amazin.now.sh'

	function generateUrl(event) {
	  const { value } = event.target
	  if (!value) return null

	  let affCode = getAffCode(value)
	  let asin = getASIN(value)

	  if (asin) {
	    url = `${amazinRootUrl}/${asin}${affCode ? `?tag=${affCode}` : ''}`
	  } else {
	    url = false
	  }
	}

	// https://www.amazon.com/CSS-Animation-101-websites-animation-ebook/dp/B07R9V95NX/ref=as_li_ss_tl?keywords=css+animation+101&qid=1556561364&s=gateway&sr=8-1-fkmrnull&linkCode=sl1&tag=donssite-20&linkId=894f5fa0cf866c6341bcd6fbeead5624&language=en_US
</script>

<article class="content">
	<h1>Amazin'</h1>
	<p>Send your customers to their local Amazon store with one link!</p>
	<p>To get your Amazin link, enter the URL or ASIN of your Amazon product:</p>
	<section class={`url-container ${url && 'has-url'}`}>
		<input type="text" name="text-input" bind:value={input} on:input={generateUrl} placeholder="Amazon URL or ASIN" />
	</section>
	{#if url}
		<p>Your link: <code>{url}</code><span class="in-clipboard">(in clipboard)</span></p>
	{/if}
</article>

<footer>
	<p class="license">This product includes GeoLite2 data created by MaxMind, available from
<a href="https://www.maxmind.com">https://www.maxmind.com</a>.</p>
</footer>

<style>
	h1,
	section,
	p {
	  text-align: center;
	  margin: 0 auto;
	}
</style>