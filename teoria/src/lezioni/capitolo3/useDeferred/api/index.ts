// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

const cache = new Map()

export function fetchData(
  url: string
): Promise<{ id: number; title: string; year: number }[]> {
  if (!cache.has(url)) {
    cache.set(url, getData(url))
  }
  return cache.get(url)
}

async function getData(url: string) {
  if (url.startsWith(`/search?q=`)) {
    return getSearchResults(url.slice(`/search?q=`.length))
  }
  throw Error(`Not implemented`)
}

async function getSearchResults(query: string) {
  // Add a fake delay to make waiting noticeable.
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  const allAlbums = [
    {
      id: 14,
      title: `Crack Musica`,
      year: 2016,
    },
    {
      id: 13,
      title: `Let It Be`,
      year: 1970,
    },
    {
      id: 12,
      title: `Abbey Road`,
      year: 1969,
    },
    {
      id: 11,
      title: `Yellow Submarine`,
      year: 1969,
    },
    {
      id: 10,
      title: `The Beatles`,
      year: 1968,
    },
    {
      id: 9,
      title: `Magical Mystery Tour`,
      year: 1967,
    },
    {
      id: 8,
      title: `Sgt. Pepper's Lonely Hearts Club Band`,
      year: 1967,
    },
    {
      id: 7,
      title: `Revolver`,
      year: 1966,
    },
    {
      id: 6,
      title: `Rubber Soul`,
      year: 1965,
    },
    {
      id: 5,
      title: `Help!`,
      year: 1965,
    },
    {
      id: 4,
      title: `Beatles For Sale`,
      year: 1964,
    },
    {
      id: 3,
      title: `A Hard Day's Night`,
      year: 1964,
    },
    {
      id: 2,
      title: `With The Beatles`,
      year: 1963,
    },
    {
      id: 1,
      title: `Please Please Me`,
      year: 1963,
    },
    {
      id: 15,
      title: `Neon Dreams`,
      year: 2022,
    },
    {
      id: 16,
      title: `Midnight Symphony`,
      year: 2019,
    },
    {
      id: 17,
      title: `Urban Echoes`,
      year: 2021,
    },
    {
      id: 18,
      title: `Desert Wind`,
      year: 2018,
    },
    {
      id: 19,
      title: `Electric Forest`,
      year: 2020,
    },
    {
      id: 20,
      title: `Ocean Waves`,
      year: 2023,
    },
    {
      id: 21,
      title: `Mountain Peak`,
      year: 2017,
    },
    {
      id: 22,
      title: `City Lights`,
      year: 2022,
    },
    {
      id: 23,
      title: `Cosmic Journey`,
      year: 2019,
    },
    {
      id: 24,
      title: `Summer Breeze`,
      year: 2021,
    },
    {
      id: 25,
      title: `Winter Tales`,
      year: 2018,
    },
    {
      id: 26,
      title: `Digital Dreams`,
      year: 2020,
    },
    {
      id: 27,
      title: `Analog Heart`,
      year: 2023,
    },
    {
      id: 28,
      title: `Future Past`,
      year: 2017,
    },
    {
      id: 29,
      title: `Silent Echo`,
      year: 2022,
    },
    {
      id: 30,
      title: `Neon Nights`,
      year: 2019,
    },
    {
      id: 31,
      title: `Solar Wind`,
      year: 2021,
    },
    {
      id: 32,
      title: `Lunar Phase`,
      year: 2018,
    },
    {
      id: 33,
      title: `Quantum Beat`,
      year: 2020,
    },
    {
      id: 34,
      title: `Stellar Path`,
      year: 2023,
    },
    {
      id: 35,
      title: `Rainbow Road`,
      year: 2017,
    },
    {
      id: 36,
      title: `Mystic Garden`,
      year: 2022,
    },
    {
      id: 37,
      title: `Thunder Storm`,
      year: 2019,
    },
    {
      id: 38,
      title: `Crystal Cave`,
      year: 2021,
    },
    {
      id: 39,
      title: `Desert Mirage`,
      year: 2018,
    },
    {
      id: 40,
      title: `Arctic Dreams`,
      year: 2020,
    },
    {
      id: 41,
      title: `Tropical Paradise`,
      year: 2023,
    },
    {
      id: 42,
      title: `Urban Jungle`,
      year: 2017,
    },
    {
      id: 43,
      title: `Neon Sunset`,
      year: 2022,
    },
    {
      id: 44,
      title: `Midnight Rain`,
      year: 2019,
    },
    {
      id: 45,
      title: `Morning Light`,
      year: 2021,
    },
    {
      id: 46,
      title: `Evening Star`,
      year: 2018,
    },
    {
      id: 47,
      title: `Digital Dawn`,
      year: 2020,
    },
    {
      id: 48,
      title: `Cyber Punk`,
      year: 2023,
    },
    {
      id: 49,
      title: `Retro Wave`,
      year: 2017,
    },
    {
      id: 50,
      title: `Future Sound`,
      year: 2022,
    },
    {
      id: 51,
      title: `Virtual Reality`,
      year: 2019,
    },
    {
      id: 52,
      title: `Sonic Boom`,
      year: 2021,
    },
    {
      id: 53,
      title: `Electric Dreams`,
      year: 2018,
    },
    {
      id: 54,
      title: `Quantum Leap`,
      year: 2020,
    },
    {
      id: 55,
      title: `Space Time`,
      year: 2023,
    },
    {
      id: 56,
      title: `Dark Matter`,
      year: 2017,
    },
    {
      id: 57,
      title: `Light Speed`,
      year: 2022,
    },
    {
      id: 58,
      title: `Solar System`,
      year: 2019,
    },
    {
      id: 59,
      title: `Galactic Core`,
      year: 2021,
    },
    {
      id: 60,
      title: `Nebula Cloud`,
      year: 2018,
    },
    {
      id: 61,
      title: `Astral Plane`,
      year: 2020,
    },
    {
      id: 62,
      title: `Cosmic Dust`,
      year: 2023,
    },
    {
      id: 63,
      title: `Crystal Waters`,
      year: 2017,
    },
    {
      id: 64,
      title: `Sonic Revolution`,
      year: 2023,
    },
  ]

  const lowerQuery = query.trim().toLowerCase()
  return allAlbums.filter((album) => {
    const lowerTitle = album.title.toLowerCase()
    return (
      lowerTitle.startsWith(lowerQuery) ||
      lowerTitle.indexOf(` ${lowerQuery}`) !== -1
    )
  })
}
