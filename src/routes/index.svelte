<!-- ABOUTME: Main page — hero tagline, project grid, and clients section -->
<!-- ABOUTME: Data arrays for projects and clients are defined here -->
<script>
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const projects = [
		{ name: 'Dortmund 3D Thermal Heatmap', img: '7', link: 'https://thermographic.catch4d.de/external/' },
		{ name: 'Data2Resilience', img: '5', link: 'https://dashboard.data2resilience.de/' },
		{ name: 'Digital Credentials Monitor', img: '9', link: 'https://digital-credentials-monitor.com//' },
		{ name: 'GeoExplorer CityLab Berlin', img: '8', link: 'https://geoexplorer.odis-berlin.de/' },
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
		{ name: 'UNESCO' },
		{ name: 'WWF' },
		{ name: 'Zeit Online' }
	];

	let introVisible = false;
	let hoveredIndex = null;

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

<section id="work" class="px-5 pt-16 pb-6 sm:px-12 sm:pt-24 sm:pb-10">
	{#if introVisible}
		<p
			class="text-3xl font-light leading-snug sm:text-5xl md:text-6xl md:leading-tight pb-8 sm:p-8 md:pb-12"
			transition:fly|local={{ y: 30, duration: 600 }}
		>
			We turn your <span class="highlight">geo data</span> into intuitive
			<span class="highlight">visualisations</span> and user-friendly web experiences.
		</p>
	{:else}
		<p class="text-3xl font-light leading-snug sm:text-5xl md:text-6xl md:leading-tight pb-8 sm:p-8 md:pb-12">
			We turn your <span class="highlight">geo data</span> into intuitive
			<span class="highlight">visualisations</span> and user-friendly web experiences.
		</p>
	{/if}

	<div class="border-t border-gray-200" />

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-0.5 mt-6 sm:mt-10">
		{#each projects as p, i}
			<a
				target="_blank"
				class="ease-in duration-300 {hoveredIndex !== null && hoveredIndex !== i ? 'opacity-60' : ''} hover:-translate-y-1"
				href={p.link}
				on:mouseenter={() => hoveredIndex = i}
				on:mouseleave={() => hoveredIndex = null}
			>
				<img
					src="{base}/img/{p.img}.png"
					srcset="{base}/img/{p.img}.png 1x, {base}/img/{p.img}@2x.png 2x"
					alt="Bold Geo Project Thumbnail"
					class="w-full block"
				/>
			</a>
		{/each}
	</div>
</section>

<section id="clients" class="px-5 py-16 sm:px-12 sm:py-24 border-t border-gray-200">
	<p class="section-label">Our clients</p>
	<p class="text-2xl font-light sm:text-3xl mb-8 text-gray-700">
		We are collaborating with a range of clients from the public, private and non-profit sector to
		make their geo data stand out.
	</p>

	<ul class="list-none sm:columns-2 mt-4 list-inside text-sm sm:text-base font-light tracking-wide leading-relaxed text-gray-800">
		{#each clients as c}
			<li>{c.name}</li>
		{/each}
	</ul>
</section>
