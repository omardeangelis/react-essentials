const jsonplaceholderPosts = `https://jsonplaceholder.typicode.com/posts?_limit=3`

export const getPosts = async (): Promise<{ id: number; title: string }[]> => {
  const response = await fetch(jsonplaceholderPosts)
  return response.json()
}

const postsApi = async (): Promise<{ id: number; title: string }[]> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
  return getPosts()
}

const jsonplaceholderUsers = `https://jsonplaceholder.typicode.com/users?_limit=1`

const getUsers = async (): Promise<{ id: number; name: string }[]> => {
  const response = await fetch(jsonplaceholderUsers)
  return response.json()
}

const usersApi = async (): Promise<{ id: number; name: string }[]> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return getUsers()
}

const fetData = new Map()

export const fetchPosts = (): Promise<{ id: number; title: string }[]> => {
  if (!fetData.has(`posts`)) {
    fetData.set(`posts`, postsApi())
  }
  return fetData.get(`posts`)
}

export const fetchUsers = (): Promise<{ id: number; name: string }[]> => {
  if (!fetData.has(`users`)) {
    fetData.set(`users`, usersApi())
  }
  return fetData.get(`users`)
}
