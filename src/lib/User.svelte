<script lang="ts">
	import { user } from '../stores/user';
	import LocationIcon from './icons/LocationIcon.svelte';
	import dayjs from 'dayjs';
</script>

{#if $user.name === undefined}
	<h3 class="font-bold text-lg md:text-lg text-black dark:text-slate-300 ml-2 md:ml-0">No results yet...</h3>
{:else}
	<article class="w-full bg-[#FEFEFE] dark:bg-[#1f2a48] rounded-lg p-4 md:p-8 shadow-lg">
		
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">

			<div class="pl-2 md:pl-0">
				<img
					class="bg-slate-700 dark:bg-white rounded-full w-24 h-24 shadow-sm"
					src={$user.avatar_url}
					alt={$user.name}
				/>
				<div class="mt-2">
					<h3 class="font-bold text-lg">{$user.name}</h3>
					<a
						class="underline decoration-blue-500 text-blue-500"
						href={$user.html_url}
						target="_blank"
						rel="noreferrer">@{$user.login}</a> <br />
					<span class="text-slate-500 dark:text-slate-300">Joined at: {dayjs($user.created_at).format('YYYY MMM DD')}</span>
					<div class="mt-2"> <span> <LocationIcon /> {$user.location}</span></div>
					<p class="mt-4 w-64 text-sm">{$user.bio}</p>
				</div>
			</div>

			<div class="bg-[#e9eaec] dark:bg-[#141c2f] w-full p-4 flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between rounded-lg mt-4">
				<div class="text-center">
					<h3 class="font-semibold text-lg">Repos</h3>
					<span>{$user.public_repos}</span>
				</div>
				<div class="text-center">
					<h3 class="font-semibold text-lg">Followers</h3>
					<span>{$user.followers.toLocaleString()}</span>
				</div>
				<div class="text-center">
					<h3 class="font-semibold text-lg">Following</h3>
					<span>{$user.following}</span>
				</div>
			</div>

		</div>
	
  </article>
{/if}
