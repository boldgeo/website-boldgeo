<script>
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const projects = [
		{ name: 'Data2Resilience', img: '5', link: 'https://data2resilience.de/' },
		{ name: 'Incora Fläche', img: '1', link: 'https://incora-flaeche.de/' },
		{ name: 'Myanmar Off-grid Analytics', img: '2', link: 'http://adb-myanmar.integration.org/' },
		{
			name: 'Nigeria Rural Electrification Plans',
			img: '3',
			link: 'http://rrep-nigeria.integration.org/'
		},
		{ name: 'Integration Environment and Energy', img: '6', link: 'https://integration.org/' },
		{ name: 'Magic Mapping Club', img: '4', link: 'https://magicmapping.club/' }
	];

	const clients = [
		{ name: 'ARCH+' },
		{ name: 'Asian Development Bank' },
		{ name: 'Bill and Melinda Gates Foundation' },
		{ name: 'Berliner Morgenpost' },
		{ name: 'Brand Eins' },
		{ name: 'Bundesinstitut für Bau-, Stadt- und Raumforschung (BBSR)' },
		{ name: 'DAAD' },
		{ name: 'DataWrapper' },
		{ name: 'Deutsche Welle' },
		{ name: 'Die Tageszeitung' },
		{ name: 'GIZ' },
		{ name: 'Goethe-Institut' },
		{ name: 'Institut für Landes- und Stadtentwicklungsforschung (ILS)' },
		{ name: 'Integration Environment & Energy' },
		{ name: 'Ruhr-Universität Bochum' },
		{ name: 'Technologiestiftung Berlin' },
		{ name: 'WWF' },
		{ name: 'Zeit Online' }
	];

	let introVisible = false;

	onMount(() => {
		setTimeout(() => {
			introVisible = true;
		}, 200);
	});
</script>

<svelte:head>
	<title>Bold Geo</title>
	<meta name="description" content="Bold Geo" />
</svelte:head>

<section id="work" class="p-5 sm:p-12 pt-26">
	{#if introVisible}
		<p
			class="text-xl leading-normal text-3xl sm:text-5xl md:text-6xl md:leading-tight md:pb-12 sm:p-8"
			transition:fly|local={{ y: 200, duration: 2000 }}
		>
			We turn your <span class="highlight">geo data</span> into intuitive
			<span class="highlight">visualisations</span> and user-friendly web experiences.
		</p>
	{:else}
		<p class="text-xl leading-normal sm:text-6xl sm:leading-tight sm:pb-12">
			We turn your <span class="highlight">geo data</span> into intuitive
			<span class="highlight">visualisations</span> and user-friendly experiences.
		</p>
	{/if}

	<div class="flex flex-wrap mb-4">
		{#each projects as p, i}
			<a
				target="_blank"
				class="w-full sm:w-1/2 hover:-translate-y-1 ease-in duration-300"
				href={p.link}
			>
				<img
					src="{base}/img/{p.img}.png"
					srcset="{base}/img/{p.img}.png 1x, {base}/img/{p.img}@2x.png 2x"
					alt="Bold Geo Project Thumbnail"
					class="m-auto"
				/>
			</a>
		{/each}
	</div>
</section>

<section id="clients" class="p-5 sm:p-20">
	<h1 class="text-2xl sm:text-4xl mb-5 font-bold">Our clients</h1>
	<p class="sm:text-2xl sm:mb-10">
		We are collaborating with a range of clients from the public, private and non-profit sector to
		make their geo data stand out.
	</p>

	<ul class="list-none sm:columns-2 mt-4 list-inside p-2 sm:text-xl text-gray-500">
		{#each clients as c, i}
			<li>{c.name}</li>
		{/each}
	</ul>
</section>

<style>
	#clients {
		background-color: #f2f3f6;
	}

	.highlight {
		/* background-color: yellow; */
		text-decoration: underline;
	}
</style>
