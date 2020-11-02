import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import Blog from './Blog'
import CreateBlog from './CreateBlog'

import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs)
  const [sorted, setSorted] = useState(false)

  if (sorted) {
    blogs.sort((a, b) => (a.likes < b.likes ? 1 : -1))
  }

  return (
    <div data-test="list-blog">

      <Button variant='outline-primary' className="m-2" as={CreateBlog}>CreateBlog</Button>
      {!sorted && (
        <Button variant='outline-primary'   className="m-2"  onClick={() => setSorted(true)}>sort by likes</Button>
      )}

      {/* <CreateBlog /> */}
      <ListGroup>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </ListGroup>
    </div>
  )
}

export default Blogs
