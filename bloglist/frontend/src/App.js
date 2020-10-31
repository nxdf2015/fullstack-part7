import React, { useState, useEffect } from 'react'
import { useDispatch  } from 'react-redux'

import Blogs from './components/Blogs'
import CreateBlog from './components/CreateBlog'
import Login from './components/Login'
import Notification from './components/Notification'

import { getALL } from './blogs/actions'
import { getToken } from './login/actions'

import './App.css'

const App = () => {
  const dispatch = useDispatch()

  const [sorted, setSorted] = useState(false)

  useEffect(() => {
    dispatch(getALL())
  }, [dispatch])

  useEffect(() => {
    dispatch(getToken())

  }, [dispatch])

  const handleSortBlog = () => {
    setSorted(true)
  }

  return (
    <div>
      <Login />
      <h2>blogs</h2>
      <Notification />
      <CreateBlog />
      <button onClick={handleSortBlog}>sort by like</button>
      <Blogs sorted={sorted} />
    </div>
  )
}

export default App
