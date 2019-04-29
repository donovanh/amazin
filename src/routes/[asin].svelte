<script context="module">
	export async function preload({ params, query }) {
	  // If no asin supplied, redirect to index

	  // Check with locale.js to see if location supplied
	  const res = await this.fetch('lookup.json')
	  const iso_code = await res.json()
	  const { asin } = params
	  if (res.status === 200) {
	    return { ...iso_code, asin }
	  } else {
	    this.error(res.status)
	  }
	}
</script>

<script>
	export let iso_code;
	export let asin;
	
	const countries = {
		UK: { name: 'United Kingdom', url: 'https://amazon.co.uk' },
		DE: { name: 'Germany', url: 'https://amazon.de' },
		IT: { name: 'Italy', url: 'https://amazon.it' },
		AU: { name: 'Australia', url: 'https://amazon.com.au' },
		AT: { name: 'Austria', url: 'https://amazon.at' },
		BR: { name: 'Brazil', url: 'https://amazon.com.br' },
		CA: { name: 'Canada', url: 'https://amazon.ca' },
		CN: { name: 'China', url: 'https://amazon.cn' },
		ES: { name: 'Spain', url: 'https://amazon.es' },
		FR: { name: 'France', url: 'https://amazon.fr' },
		IN: { name: 'India', url: 'https://amazon.in' },
		JP: { name: 'Japan', url: 'https://amazon.jp' },
		MX: { name: 'Mexico', url: 'https://amazon.com.mx' },
		US: { name: 'USA', url: 'https://amazon.com' }
	}

	function generateURL(country) {
		return `${countries[country].url}/dp/${asin}/`;
	}

	// TODO: query params
	// TODO: also tests, pleast tests
	let url;

	if (iso_code) {
		switch(iso_code) {
			case 'UK': 
			case 'IE':
				url = generateURL('UK');
			break;
			case 'DE':
				url = generateURL('DE');
		}
	}

</script>

<style>
</style>

<svelte:head>
	<title>{url ? `Redirecting to Amazon URL ${url}` : 'Choose an Amazon'}</title>
</svelte:head>

<div class='content'>
	{#if url}
		<p>Redirecting to: <a href="{url}">{url}</a></p>
	{:else}
		<p>Choose an Amazon</p>
	{/if}
</div>