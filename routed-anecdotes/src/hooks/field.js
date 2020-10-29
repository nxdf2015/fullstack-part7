import { useState } from 'react'

export const useField = (label) => {
  const [value, setValue] = useState('')
  const name = label
  const onChange = (event) => setValue(event.target.value)
  return { name, onChange, value }
}
