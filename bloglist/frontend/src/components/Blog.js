import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateLike, removeBlog } from '../blogs/actions'
const Blog = ({ blog }) => {

  const dispatch = useDispatch()
  const [detailsVisible, setVisible] = useState(false)



  const handlerLike = () => dispatch(updateLike(blog))


  const handlerRemove = () => {
    if (window.confirm(`remove ${blog.title} by ${blog.author}`)){
      dispatch(removeBlog(blog))
    }
  }

  return (
    <div className='blog-container'>
      {detailsVisible ? <BlogDetails {...blog} handlerLike={handlerLike} /> : <div className='blog-info'>{blog.title}</div>}

      <button className='btn-view' onClick={() => setVisible((visible) => !visible)}>
        {detailsVisible ? 'hidde' : 'view'}
      </button>

      <button onClick={handlerRemove}>remove</button>
    </div>
  )
}


const BlogDetails = ({   title, author, likes ,handlerLike }) => (
  <div className="blog-details">
    <div>{title}</div>
    <div>{author}</div>
    <div>likes  {likes} <button className='btn-like' onClick={handlerLike} >like</button></div>
  </div>
)

export default Blog
