import { useState } from "react"

export const useInputForm = (defaultName: string) => {
  const [value, setValue] = useState(defaultName)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return { value, handleChange }
}
