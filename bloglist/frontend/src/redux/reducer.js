import { combineReducers } from 'redux'

import notificationReducer from '../notification/reducer'
import blogReducer from '../blogs/reducer'
import loginReducer from '../login/reducer'
import userReducer from '../users/reducer'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogReducer,
  login: loginReducer,
  users: userReducer,
})

export default reducer
