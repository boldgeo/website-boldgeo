<script>
	import { base } from '$app/paths';

	const projects = [
		{ img: '1', link: 'https://incora-flaeche.de/' },
		{ name: 'Myanmar Off-grid Analytics', img: '2', link: 'https://adb-myanmar.integration.org/' },
		{
			name: 'Nigeria Rural Electrification Plans',
			img: '3',
			link: 'http://rrep-nigeria.integration.org/'
		},
		{ name: 'Magic Mapping Club', img: '4', link: 'https://magicmapping.club/' }
	];

	const clients = [
		{ name: 'ARCH+' },
		{ name: 'Asian Development Bank' },
		{ name: 'Bill and Melinda Gates Foundation' },
		{ name: 'Berliner Morgenpost' },
		{ name: 'Brand Eins' },
		{ name: 'DAAD' },
		{ name: 'DataWrapper' },
		{ name: 'Deutsche Welle' },
		{ name: 'Die Tageszeitung' },
		{ name: 'GIZ' },
		{ name: 'Goethe-Institut' },
		{ name: 'Technologiestiftung Berlin' },
		{ name: 'WWF' },
		{ name: 'Zeit Online' }
	];
</script>

<svelte:head>
	<title>Bold Geo</title>
	<meta name="description" content="Bold Geo" />
</svelte:head>

<section id="work" class="p-5 sm:p-12">
	<p class="text-xl">
		We turn your geo data into inuitive visualisations and user fiendly experiences.
	</p>

	<div class="flex flex-wrap mb-4">
		{#each projects as p, i}
			<a
				target="_blank"
				class="w-full sm:w-1/2 opacity-75 hover:opacity-100 ease-in duration-300"
				href={p.link}
			>
				<img src="{base}/img/{p.img}.png" alt="Project 1" />
			</a>
		{/each}
	</div>
</section>

<section id="clients" class="p-5 sm:p-12">
	<h1 class="text-2xl mb-2">Our clients</h1>
	<p>
		We are working with a range of clients from the public, private and non-profit sector to make
		their geo data stand out.
	</p>

	<ul class="list-disc sm:columns-2 mt-4 list-inside p-2">
		{#each clients as c, i}
			<li>{c.name}</li>
		{/each}
	</ul>
</section>

<section id="contact" class="p-5 lg:p-12">
	<h1 class="text-2xl mb-2">Contact</h1>
	<a href="mailto:info@boldgeo.de">info@boldgeo.de</a>
</section>

<style>
	#clients {
		background-color: #f2f3f6;
	}
</style>
