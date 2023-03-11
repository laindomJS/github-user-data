<script lang="ts">
	import { getUser } from './services/getUser';
	let username = '';

  const handleSubmit = () => {
    getUser(username).then(user => console.log(user));
  }

	const handleChange = ({ target }) => {
		username = target.value;
	}
</script>

<main>
	<h1>GiHub Search</h1>
	<form on:submit|preventDefault={handleSubmit}>
		<input
			on:change={handleChange}
			bind:value={username}
			type="text"
			placeholder="Write the username..."
		/>
    <button>Search</button>
	</form>
</main>
