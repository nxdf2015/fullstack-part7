import React from 'react'
import { useDispatch } from 'react-redux'

import { removeBlog } from '../blogs/actions'


import { Link } from 'react-router-dom'
const Blog = ({ blog }) => {
  const dispatch = useDispatch()

  const handlerRemove = () => {
    if (window.confirm(`remove ${blog.title} by ${blog.author}`)) {
      dispatch(removeBlog(blog))
    }
  }

  return (
    <div className="blog-container">
      <Link to={`/blogs/${blog.id}`}>
        <div className="blog-info">{blog.title}</div>
      </Link>
      <button onClick={handlerRemove}>remove</button>
    </div>
  )
}

export default Blog
