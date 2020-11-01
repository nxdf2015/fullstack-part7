import React from 'react'
import { useSelector } from 'react-redux'
const UserBlog = (props) => {
  const id = props.id

  const user = useSelector((state) => state.users[id])
  const blogs = useSelector((state) =>
    state.blogs.filter((blog) => blog.user.id === id)
  )
  if (!user) {
    return null
  }
  return (
    <div>
      <h2>{user.name}</h2>
      added blog
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserBlog
