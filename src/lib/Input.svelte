<script lang="ts">
  	import SearchIcon from './SearchIcon.svelte';
</script>

<form class="mt-8 py-4 w-full relative">
  <SearchIcon />
  <input class="bg-[#1f2a48] w-full py-4 px-12 md:px-14 rounded-xl text-white placeholder:text-white placeholder:font-thin placeholder:-tracking-widest md:placeholder:tracking-normal" type="text" placeholder="Search GitHub user...">
  <button class="w-16 md:w-24 h-10 font-bold absolute right-2 top-6 bg-blue-600 rounded-lg">Search</button>
</form>