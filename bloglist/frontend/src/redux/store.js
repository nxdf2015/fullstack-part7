import { createStore ,applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducer from './reducer'
let enhancer = applyMiddleware(ReduxThunk)

if (process.env.NODE_ENV === 'development'){
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(enhancer)
}

const store = createStore(reducer ,enhancer)

export default store