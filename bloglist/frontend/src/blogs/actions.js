import blogService from '../services/blogs'

import * as names from './names'
import { successNotification, errorNotification } from '../notification/action'

const addBlogStore = (data) => ({
  type: names.ADD_BLOG,
  data,
})

const getAllBlog = (data) => ({
  type: names.GET_ALL_BLOG,
  data,
})

const updateLikeStore = (id) => ({
  type: names.UPDATE_LIKE_BLOG,
  id,
})

const removeBlogStore = (id) => ({
  type: names.REMOVE_BLOG,
  id,
})

export const addCommentStore = (id,comment) => ({
  type: names.ADD_COMMENT,
  comment,
  id
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

export const addComment = (id,comment) => dispatch => {
  console.log('action add comment', comment,id)
  blogService.addComment(id,comment)
    .then(() => {
      dispatch(addCommentStore(id,comment))
    })
}