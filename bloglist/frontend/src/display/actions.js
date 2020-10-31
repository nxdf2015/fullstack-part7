
import * as names from './names'

export const toggleDetails = (id) => ({
  type: names.TOGGLE_DETAILS,
  id
})

export const showAll = () => (dispatch , getState) => {
  const ids = getState().blogs.map(blog => blog.id)

  return dispatch({
    type: names.SHOW_ALL,
    ids
  })}
export const hideAll = () => (dispatch , getState) => {
  const ids = getState().blogs.map(blog => blog.id)

  return dispatch({
    type: names.SHOW_ALL,
    ids
  })}


