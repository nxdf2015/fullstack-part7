import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const Users = () => {
  const users = useSelector((state) => state.users)
  const ids = useSelector((state) =>
    state.blogs.reduce((acc, blog) => {
      const id = blog.user.id
      acc[id] |= 0
      acc[id] += 1
      return acc
    }, {})
  )

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>number blog created</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(ids).map(([id, count]) => (
            <User key={id} {...users[id]} count={count} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const User = ({ name, count, id }) => (
  <tr>
    <td>
      <Link to={`/users/${id}`}>{name}</Link>
    </td>{' '}
    <td>{count}</td>
  </tr>
)

export default Users
