import React from 'react'

import { useSelector } from 'react-redux'
import Blog from './Blog'

const Blogs = ({ sorted }) => {
  const blogs = useSelector(state => state.blogs)

  if (sorted) {
    blogs.sort((a, b) => (a.likes < b.likes ? 1 : -1))
  }
  return  <div data-test="list-blog">{
    blogs.map((blog) => (
      <Blog key={blog.id} blog={blog}/>))}
  </div>

}


export default Blogs
