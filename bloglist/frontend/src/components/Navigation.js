import React from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'

const Navigation = () => {
  return (<nav>
    <Link to='/'>blogs</Link>
    <Link to='/users'>users</Link>
    <Login/>
  </nav>)
}

export default Navigation