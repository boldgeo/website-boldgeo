<!-- ABOUTME: Main page — hero tagline, project grid, and clients section -->
<!-- ABOUTME: Data arrays for projects and clients are defined here -->
<script>
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const projects = [
		{ client: 'ILS', name: 'Thermographic 3D Heat Map Dortmund', img: '7', link: 'https://thermographic.catch4d.de/external/' },
		{ client: 'Ruhr-Universität Bochum', name: 'Data2Resilience Dashboard', img: '5', link: 'https://dashboard.data2resilience.de/' },
		{ client: 'DAAD', name: 'Digital Credentials Monitor', img: '9', link: 'https://digital-credentials-monitor.com//' },
		{ client: 'CityLab Berlin', name: 'AI Geo Explorer', img: '8', link: 'https://geoexplorer.odis-berlin.de/' },
		{ client: 'BBSR', name: 'Incora Flächeninfo Dashboard', img: '1', link: 'https://incora-flaeche.de/' },
		{ client: 'Integration Environment & Energy', name: 'Myanmar Off-grid Analytics', img: '2', link: 'http://adb-myanmar.integration.org/' },
		{ client: 'Integration Environment & Energy', name: 'Nigeria Rural Electrification Plans', img: '3', link: 'http://rrep-nigeria.integration.org/' },
		{ client: 'Integration Environment & Energy', name: 'Website Project Locator', img: '6', link: 'https://integration.org/' },
		{ client: 'Uncomissioned', name: 'VisitMyOrbit (Map & Network Artist Visualization)', img: '10', link: 'https://visitmyorbit.vercel.app/' }
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

<section class="px-5 pt-16 pb-6 sm:px-12 sm:pt-24 sm:pb-10">
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
</section>

<section id="services" class="px-5 py-16 sm:px-12 sm:py-24 border-b border-gray-200">
	<p class="section-label mb-3">Services</p>
	<p class="text-lg sm:text-xl font-light leading-relaxed text-gray-700 mb-10 max-w-3xl">
		Bold Geo is a Barcelona-based studio for spatial data and visualisation. We help organisations in
		the public, private and non-profit sector turn complex geographic data into clear, interactive
		tools — from early-stage data strategy to fully deployed web applications.
	</p>

	<ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl">
		<li>
			<span class="block text-base font-medium">Data Processing & Analysis</span>
			<span class="block text-base font-light text-gray-500">Cleaning, structuring and analysing spatial datasets</span>
		</li>
		<li>
			<span class="block text-base font-medium">Interactive Maps & Dashboards</span>
			<span class="block text-base font-light text-gray-500">Browser-based tools for exploring geographic data</span>
		</li>
		<li>
			<span class="block text-base font-medium">Data Visualisation & Cartography</span>
			<span class="block text-base font-light text-gray-500">Static and animated maps, charts and graphics</span>
		</li>
		<li>
			<span class="block text-base font-medium">Consulting & Strategy</span>
			<span class="block text-base font-light text-gray-500">Advising on how to collect, manage and communicate geo data</span>
		</li>
		<li>
			<span class="block text-base font-medium">Product Development</span>
			<span class="block text-base font-light text-gray-500">Designing and building complete data-driven web applications</span>
		</li>
		<li>
			<span class="block text-base font-medium">Training & Workshops</span>
			<span class="block text-base font-light text-gray-500">Teaching teams to work with spatial data and visualisation tools</span>
		</li>
	</ul>
</section>

<section id="work" class="px-5 pt-16 pb-6 sm:px-12 sm:pt-24 sm:pb-10">
	<p class="section-label mb-3">Selected work</p>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
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
				<span class="block mt-3 section-label">{p.client}</span>
				<span class="block text-base font-light text-gray-600">{p.name}</span>
			</a>
		{/each}
	</div>
</section>

<section id="clients" class="px-5 py-16 sm:px-12 sm:py-24 border-t border-gray-200">
	<p class="section-label mb-3">Our clients</p>
	<p class="text-2xl font-light sm:text-3xl mb-8 text-gray-700">
		We are collaborating with a range of clients from the public, private and non-profit sector to
		make their geo data stand out.
	</p>

	<ul class="list-none sm:columns-2 mt-4 list-inside text-base font-light tracking-wide leading-relaxed text-gray-800">
		{#each clients as c}
			<li>{c.name}</li>
		{/each}
	</ul>
</section>
