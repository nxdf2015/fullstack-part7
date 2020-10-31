import { combineReducers } from 'redux'

import notificationReducer from '../notification/reducer'


const reducer = combineReducers({
  notification : notificationReducer
})


export default reducer