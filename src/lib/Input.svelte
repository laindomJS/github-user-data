<script lang="ts">
  import { user } from '../stores/user';
  import SearchIcon from './icons/SearchIcon.svelte';

  const { handleChange, handleSubmit } = user;
</script>

<form on:submit|preventDefault={handleSubmit} class="mt-8 py-4 w-full relative">
  <SearchIcon />
  <input on:change={handleChange} 
    class="bg-[#FEFEFE] dark:bg-[#1f2a48] w-full py-4 px-12 md:px-14 rounded-xl text-black dark:text-white placeholder:text-black dark:placeholder:text-white placeholder:font-thin placeholder:-tracking-widest md:placeholder:tracking-normal shadow-md focus:outline-none" 
    type="text" 
    placeholder="Search GitHub user...">
  <button class="w-16 md:w-24 h-10 font-bold absolute right-2 top-6 bg-blue-600 rounded-lg text-white">Search</button>
</form>