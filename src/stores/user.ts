import { writable, type Writable } from 'svelte/store';
import { getUser } from '../services/getUser';

const createUser = () => {

  const initialUser:User = {
    name: undefined,
    avatar_url: '',
    login: '',
    location: '',
    bio: '',
    public_repos: 0,
    followers: 0,
    following: 0,
    created_at: '',
    html_url: '',
  }

  const { subscribe, set } = writable(initialUser);

  let username = '';

  return {
    subscribe,
    handleChange: ({ target }) => {
      username = target.value;
    },
    handleSubmit: async () => {
      getUser(username).then(user => set(user));
    }
  }

}

export const user = createUser();