import * as names from './names'
const default_state =  []
const reducer = (state = default_state,action) => {
  switch(action.type){
  case names.ADD_BLOG:
    return [...state,action.data]
  case names.GET_ALL_BLOG:
    return [...state,...action.data]
  case names.REMOVE_BLOG:
    return state.filter(blog => blog.id !== action.id)
  case names.UPDATE_LIKE_BLOG:
    return state.map(blog => blog.id === action.id ? ({ ...blog, likes : blog.likes + 1 }): blog)
  default:
    return state


  }
}

export default reducer