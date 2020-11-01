import blogService from '../services/blogs'

import { ADD_BLOG, UPDATE_LIKE_BLOG, REMOVE_BLOG, GET_ALL_BLOG } from './names'
import { successNotification, errorNotification } from '../notification/action'

const addBlogStore = (data) => ({
  type: ADD_BLOG,
  data,
})

const getAllBlog = (data) => ({
  type: GET_ALL_BLOG,
  data,
})

const updateLikeStore = (id) => ({
  type: UPDATE_LIKE_BLOG,
  id,
})

const removeBlogStore = (id) => ({
  type: REMOVE_BLOG,
  id,
})

export const addBlog = (blog) => (dispatch) => {
  blogService
    .create(blog)
    .then(({ data }) => {
      dispatch(
        successNotification(`A new blog ${blog.title} by ${blog.author} added`)
      )
      dispatch(addBlogStore(data))
    })
    .catch((error) =>
      dispatch(
        errorNotification(
          error.data || 'error creation blog all fields required'
        )
      )
    )
}

export const removeBlog = (blog) => (dispatch) => {
  blogService
    .remove(blog)
    .then(() => {
      const id = blog.id
      dispatch(removeBlogStore(id))
      dispatch(successNotification(`remove ${blog.title} by ${blog.author}`))
    })
    .catch((error) => {
      let message
      if (!localStorage.getItem('token')) {
        message = 'you must logged and author of the blog to remove it'
      } else {
        message = 'error connection'
      }
      dispatch(errorNotification(error.data || message))
    })
}

export const updateLike = (blog) => (dispatch) => {
  blogService.updateLike(blog).then((response) => {
    const id = response.data.id

    dispatch(updateLikeStore(id))
  })
}

export const getAll = () => (dispatch) =>
  blogService.getAll().then((blogs) => dispatch(getAllBlog(blogs)))
