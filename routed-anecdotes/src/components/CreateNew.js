import React  from 'react'
import { useHistory } from 'react-router-dom'

import { useField } from '../hooks/field'
export const CreateNew = (props) => {

  const info = useField('info')
  const content = useField('info')
  const author = useField('info')

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    })

    history.push('/')
  }

  const reset = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit} onReset={reset}>
        <div>
          content
          <input {...content.input} />
        </div>
        <div>
          author
          <input {...author.input} />
        </div>
        <div>
          url for more info
          <input {...info.input} />
        </div>
        <input type='submit' value='create'/>
        <input type="reset" value='reset'/>
      </form>
    </div>
  )
}
