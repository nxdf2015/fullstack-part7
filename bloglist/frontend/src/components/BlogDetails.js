import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateLike, addComment } from '../blogs/actions'

const BlogDetails = ({ id }) => {
  const dispatch = useDispatch()
  const blog = useSelector((state) => state.blogs.find((blog) => blog.id === id) )
  const handlerLike = () => dispatch(updateLike(blog))
  if (!blog){
    return null
  }
  const {
    title,
    author,
    likes,
    url,
    comments,
    user: { name },
  } = blog

  const handlerSubmit = (event) => {
    event.preventDefault()

    const comment = event.target.comment.value
    dispatch(addComment(id, comment))
  }
  return (
    <div className="blog-details">
      <h2>
        {title} {author}
      </h2>
      <a href={url}>{url}</a>
      <div>
        likes {likes}{' '}
        <button className="btn-like" onClick={handlerLike}>
          like
        </button>
      </div>
      <div>added by {name} </div>
      <h2>comments</h2>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="comment" />
        <button>add comment</button>
      </form>
      <ul>
        {comments.map((comment,i) => (
          <li key={id+i}>{comment}</li>
        ))}
      </ul>
    </div>
  )
}

export default BlogDetails
