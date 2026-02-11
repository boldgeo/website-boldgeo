<!-- ABOUTME: Site header with wordmark, tagline, and navigation -->
<!-- ABOUTME: Renders a prominent static header and a compact sticky header on scroll -->
<script>
	import { onMount } from 'svelte';

	let isScrolled = false;

	onMount(() => {
		const onScroll = () => {
			isScrolled = window.scrollY > 100;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header class="px-5 py-8 sm:px-12 sm:py-10 flex flex-wrap items-center justify-between">
	<div class="sm:w-1/2 flex flex-wrap -space-y-1 mb-4">
		<h1 class="w-full text-6xl font-black">bold geo</h1>
		<p class="w-full text-sm font-light tracking-wide text-gray-500">experts for spatial data & visualisation</p>
	</div>

	<nav class="flex flex-row items-center space-x-10 sm:space-x-16">
		<a class="text-base sm:text-xl nav-link" href="#work">work</a>
		<a class="text-base sm:text-xl nav-link" href="#clients">clients</a>
		<a class="text-base sm:text-xl nav-link" href="#contact">contact</a>
	</nav>
</header>

<div class="sticky-header {isScrolled ? 'visible' : ''}">
	<div class="inner">
		<span class="text-lg font-black">bold geo</span>
		<nav class="flex flex-row items-center space-x-10">
			<a class="text-sm nav-link" href="#work">work</a>
			<a class="text-sm nav-link" href="#clients">clients</a>
			<a class="text-sm nav-link" href="#contact">contact</a>
		</nav>
	</div>
</div>

<style>
	.nav-link {
		border-bottom: 1px solid transparent;
		transition: border-color 0.2s ease;
		padding-bottom: 1px;
	}

	.nav-link:hover {
		border-color: black;
	}

	.sticky-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		background: white;
		border-bottom: 1px solid #e5e7eb;
		opacity: 0;
		transform: translateY(-8px);
		pointer-events: none;
		transition: opacity 0.3s ease, transform 0.3s ease;
	}

	.sticky-header.visible {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}

	.sticky-header .inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1.25rem;
	}

	@media (min-width: 640px) {
		.sticky-header .inner {
			padding: 0.75rem 3rem;
		}
	}
</style>
