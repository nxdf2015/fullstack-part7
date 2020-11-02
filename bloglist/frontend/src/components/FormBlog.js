import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { addBlog } from '../blogs/actions'
const defaultBlog = { title: '', author: '', url: '' }

const CreateBlog = ({ toogleVisibility }) => {
  const dispatch = useDispatch()
  const [blog, setBlog] = useState(defaultBlog)

  const handleCreate = (event) => {
    event.preventDefault()
    dispatch(addBlog(blog))
    toogleVisibility()
    setBlog(defaultBlog)
  }

  return (
    <div>
      <h1>create new Blog</h1>
      <Form
        className="w-25 mx-2"
        data-test="create-form"
        onSubmit={handleCreate}
      >
        <Form.Group>
          <Form.Label>title</Form.Label>
          <Form.Control
            type="text"
            value={blog.title}
            onChange={({ target }) =>
              setBlog((blog) => ({ ...blog, title: target.value }))
            }
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>author</Form.Label>
          <Form.Control
            type="text"
            value={blog.author}
            onChange={({ target }) =>
              setBlog((blog) => ({ ...blog, author: target.value }))
            }
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>url</Form.Label>
          <Form.Control
            type="text"
            value={blog.url}
            onChange={({ target }) =>
              setBlog((blog) => ({ ...blog, url: target.value }))
            }
          ></Form.Control>
        </Form.Group>

        <div>
          <Form.Group>
            <Button type="submit">create</Button>
          </Form.Group>
          {/* <button type="submit">create</button> */}
        </div>
      </Form>
    </div>
  )
}

const Elements = ({ label, value, onChange }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control type="text" value={value} onChange={onChange}></Form.Control>
  </Form.Group>
)

export default CreateBlog
