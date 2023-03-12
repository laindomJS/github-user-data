<script lang="ts">
	import { getUser } from './services/getUser';
	import Input from './lib/Input.svelte';
	import Header from './lib/Header.svelte';
	let username = '';

  const handleSubmit = () => {
    getUser(username).then(user => console.log(user));
  }

	const handleChange = ({ target }) => {
		username = target.value;
	}
</script>

<main class="w-full h-full flex justify-center place-items-center">
	<div class="w-[480px] h-fit p-4 flex flex-col">
		<Header />
		<Input />
	</div>
</main>




