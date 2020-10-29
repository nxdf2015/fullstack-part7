import { useState } from 'react'

export const useField = (label , type = 'text') => {
  const [value, setValue] = useState('')
  const name = label
  const onChange = (event) => setValue(event.target.value)
  const reset = () => setValue('')
  return { type , name , onChange, value ,reset }
}
