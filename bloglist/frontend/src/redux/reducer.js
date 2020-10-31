import { combineReducers } from 'redux'

import notificationReducer from '../notification/reducer'
import blogReducer  from '../blogs/reducer'
import loginReducer from '../login/reducer'
import displayReducer from '../display/reducer'

const reducer = combineReducers({
  notification : notificationReducer,
  blogs : blogReducer,
  login: loginReducer,
  display: displayReducer
})


export default reducer