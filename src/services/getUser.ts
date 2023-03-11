export const getUser = async (name:string):Promise<User> => {
  const URL = `https://api.github.com/users/${name}`;
  const res = await fetch(URL);
  if (res.ok) {
    const data = res.json();
    return data;
  }
}
