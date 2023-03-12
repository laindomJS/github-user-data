type User = {
  name: string,
  avatar_url: string,
  login: string,
  location: string,
  bio: string,
  public_repos: number,
  followers: number,
  following: number,
  created_at: string,
  html_url: string,
}

type ApiError = {
  message: string,
}