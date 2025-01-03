export async function updateQuantity(quantity: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(quantity)
    }, 2000)
  })
}

const cache = new Map()

export function fetchData(
  url: string
): Promise<{ id: number; text: string }[]> {
  if (!cache.has(url)) {
    cache.set(url, getMessages())
  }
  return cache.get(url)
}

async function getMessages(): Promise<{ id: number; text: string }[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  const posts = []
  for (let i = 0; i < 500; i++) {
    posts.push({
      id: i,
      text: `Post #${i + 1}`,
    })
  }
  return posts
}
