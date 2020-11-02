import React from 'react'
import { useDispatch } from 'react-redux'

import { removeBlog } from '../blogs/actions'

import { Link } from 'react-router-dom'
import { ListGroup, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const Blog = ({ blog }) => {
  const dispatch = useDispatch()

  const handlerRemove = () => {
    if (window.confirm(`remove ${blog.title} by ${blog.author}`)) {
      dispatch(removeBlog(blog))
    }
  }

  return (
    <ListGroup.Item variant="light" action>
      <Row>
        <Col md="10">
          <Link to={`/blogs/${blog.id}`}>
            <div>{blog.title}</div>
          </Link>
        </Col>
        <Col>
          <Button variant="outline-danger" onClick={handlerRemove}>
            remove
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

export default Blog
