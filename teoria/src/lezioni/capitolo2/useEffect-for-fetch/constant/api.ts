export const APIURL = `https://swapi.dev/api`
export const PEOPLE_URL = `${APIURL}/people`
export const PLANETS_URL = `${APIURL}/planets`
export const FILMS_URL = `${APIURL}/films`
export const SPECIES_URL = `${APIURL}/species`
export const VEHICLES_URL = `${APIURL}/vehicles`
export const STARSHIPS_URL = `${APIURL}/starships`

export type Person = {
  id: string
  birth_year: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  created: string
  edited: string
  species: string[]
  starships: string[]
  url: string
  vehicles: string[]
}
