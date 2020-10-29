import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useField } from '../hooks/field'
export const CreateNew = (props) => {
  // const [content, setContent] = useState('')
  // const [author, setAuthor] = useState('')
  // const [info, setInfo] = useState('')

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

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for mre info
          <input {...info} />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}
