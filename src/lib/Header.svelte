<script lang="ts">
import SunIcon from "./icons/SunIcon.svelte";
import MoonIcon from "./icons/MoonIcon.svelte";

let actualTheme = '';
const themeSwitch = ():void => {  
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    actualTheme = 'light';
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  actualTheme = 'dark';
}
</script>

<header class="flex items-center justify-between">
  <h1 class="text-xl md:text-2xl font-bold tracking-wide">devfinder</h1>
  <button class="flex items-center font-bold md:text-xl" on:click={themeSwitch}>
    {#if actualTheme === 'light'}
      Toggle <MoonIcon />
      {:else}
      Toggle <SunIcon />
    {/if}
  </button>
</header>