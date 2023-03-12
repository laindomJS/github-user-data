<script lang="ts">
	import { onMount } from 'svelte';
	import Input from './lib/Input.svelte';
	import Header from './lib/Header.svelte';
  import User from './lib/User.svelte';

	onMount(() => {
		const userTheme = localStorage.getItem('theme');
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

		if (userTheme === 'dark' || (!userTheme && systemTheme)) {
			document.documentElement.classList.add('dark');
			return;
		}
	})
</script>

<main class="w-full h-full flex justify-center place-items-center">
	<div class="w-[660px] lg:w-[700px] h-[600px] p-4 flex flex-col lg:pt-8">
		<Header />
		<Input />
		<User />
	</div>
</main>




