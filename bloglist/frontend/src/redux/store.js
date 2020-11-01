import { createStore ,applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducer from './reducer'


const store = createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ (applyMiddleware(ReduxThunk)))

export default store