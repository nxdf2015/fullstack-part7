import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import Blog from './Blog'
import CreateBlog from './CreateBlog'

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs)
  const [sorted, setSorted] = useState(false)

  if (sorted) {
    blogs.sort((a, b) => (a.likes < b.likes ? 1 : -1))
  }

  return (
    <div data-test="list-blog">
      <CreateBlog/>
      {!sorted && <button onClick={() => setSorted(true)}>sort by likes</button>}
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default Blogs
