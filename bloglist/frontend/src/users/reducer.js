import * as names from './names'
const default_state = {}
const reducer = (state = default_state, action) => {
  switch (action.type) {
  case names.REMOVE_USER:
    return state.filter((user) => user.id !== action.user.id)
  case names.ADD_USER:
    return action.users.reduce((acc, user) => {
      acc[user.id] = user
      return acc
    }, {})
  default:
    return state
  }
}

export default reducer
