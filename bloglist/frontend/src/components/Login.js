import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setLogOut,setLogin } from '../login/actions'

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' })
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.login.logged)
  const handlerLog = ({ target }) => {
    setUser((user) => ({ ...user, [target.name]: target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    dispatch(setLogin(user))

    setUser((user) => ({ ...user, password: '' }))
  }



  const logout = () => {
    dispatch(setLogOut())
  }

  return (
    <div>
      {isLogged ? (
        <>
          <span> {`${user.username} logged in`}</span>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <>
          <h2>Log in to application</h2>
          <form data-test="login-form" onSubmit={handleSubmit}>
            <div>
              <label>
                username
                <input
                  type="text"
                  name="username"
                  onChange={handlerLog}
                  value={user.username}
                />
              </label>
            </div>
            <div>
              <label>
                password
                <input
                  type="password"
                  name="password"
                  onChange={handlerLog}
                  value={user.password}
                  placeholder="password"
                />
              </label>
            </div>
            <div>
              <button type="submit">login</button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default Login
