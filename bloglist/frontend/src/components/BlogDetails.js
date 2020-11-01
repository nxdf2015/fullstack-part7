import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { updateLike } from '../blogs/actions'

const BlogDetails = ({ id  }) => {

  const dispatch = useDispatch()
  const blog = useSelector(state => state.blogs.find(blog => blog.id === id ))
  const handlerLike = () => dispatch(updateLike(blog))

  const  { title, author, likes ,url , user : { name } } =blog

  return (<div className="blog-details">
    <h2>{title} {author}</h2>
    <a href={url}>{url}</a>
    <div>likes  {likes} <button className='btn-like' onClick={handlerLike}>like</button></div>
    <div>added by {name} </div>
  </div>
  )}

export default BlogDetails
