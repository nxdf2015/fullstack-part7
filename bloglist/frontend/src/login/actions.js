import * as names from './names'

import usersService from '../services/users'

import { errorNotification, successNotification } from '../notification/action'
const setLogged = (islogged) => ({
  type: islogged ? names.LOGIN : names.LOGOUT,
})

const setUser = ({ username }) => ({
  type: names.SET_USER,
  username,
})

export const showLoginForm = () => ({
  type: names.SHOW_LOGIN_FORM,
})

export const hideLoginForm  = () => ({
  type:names.HIDE_LOGIN_FORM
})

export const getToken = () => (dispatch, getState) => {
  const token = getState().login.token
  if (token) {
    usersService
      .decodeToken(token)
      .then((response) => {
        const user = response.data

        dispatch(setLogged(true))
        dispatch(successNotification(`${user.username}  is logged`))
        dispatch(setUser({ username: user.username }))
      })
      .catch((error) =>
        dispatch(errorNotification(error.data || 'invalid credential'))
      )
  }
}

export const setToken = (token) => {
  localStorage.setItem('token', token)
  return { type: names.SET_TOKEN, token }
}

export const removeToken = () => {
  localStorage.removeItem('token')
  return { type: names.REMOVE_TOKEN }
}

export const setLogin = (user) => (dispatch) => {
  usersService
    .create(user)
    .then((response) => {
      const token = response.data.token

      dispatch(setToken(token))
      dispatch(setLogged(true))
      dispatch(successNotification(`${user.username}   logged`))
    })
    .catch(() => {
      dispatch(setLogged(false))
      dispatch(errorNotification('invalid credential'))
    })
}

export const setLogOut = () => (dispatch) => {
  dispatch(setLogged(false))
  dispatch(removeToken)
}
