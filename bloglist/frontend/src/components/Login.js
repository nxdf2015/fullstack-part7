import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { setLogOut, showLoginForm } from '../login/actions'

import Button from 'react-bootstrap/Button'

const Login = () => {
  const dispatch = useDispatch()
  const isLogged = useSelector((state) => state.login.logged)

  const handleLogin = () =>
    isLogged ? dispatch(setLogOut()) : dispatch(showLoginForm())

  return (
    <Button size="sm" onClick={handleLogin}>
      {isLogged ? 'logout' : 'login'}
    </Button>
  )
}

export default Login
