import { createStore ,applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducer from './reducer'


// if (process.env.NODE_ENV === 'development'){
//   enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(enhancer)
// }

const store = createStore(reducer ,applyMiddleware(ReduxThunk))

export default store