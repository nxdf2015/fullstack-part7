
import * as names from './names'
const default_state = {}
const reducer = (state = default_state,action) => {
  switch (action.type){
  case names.TOGGLE_DETAILS:
    return { ...state , [action.id] : !state[action.id] }


  default:
    return state
  }
}


export default reducer