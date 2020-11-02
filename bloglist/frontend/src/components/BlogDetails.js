import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Media from 'react-bootstrap/Media'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/button'
import { updateLike, addComment } from '../blogs/actions'

const BlogDetails = ({ id }) => {
  const dispatch = useDispatch()
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === id)
  )
  const handlerLike = () => dispatch(updateLike(blog))
  if (!blog) {
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
    <ul className="list-unstyled">
      <Media as="li">
        <Media.Body as="li">
          <h2>
            {title} {author}
          </h2>
          <h6>
            <a href={url}>{url}</a>
          </h6>
          <Row>
            <h6>
              <span className="mx-2">likes</span>{' '}
              <span className="badge badge-primary">{likes} </span>
              <Button size="sm" className="btn-like ml-2" onClick={handlerLike}>
                +
              </Button>
            </h6>
          </Row>
          <div>added by {name} </div>

          <form onSubmit={handlerSubmit}>
            <input type="text" name="comment" />
            <button>add comment</button>
          </form>
        </Media.Body>
      </Media>
      <Media as="li" className="ml-3 my-2">
        <Media.Body>
          <h2>comments</h2>
          <ul className="list-unstyled">
            {comments.map((comment, i) => (
              <Media as="li" key={id + i}>
                <Media.Body>{comment}</Media.Body>
              </Media>
            ))}
          </ul>
        </Media.Body>
      </Media>
    </ul>
  )
}

export default BlogDetails
