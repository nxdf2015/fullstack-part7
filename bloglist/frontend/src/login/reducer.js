import * as names from './names'

const default_state = { token : localStorage.getItem('token') , username : ''  , logged : false }

const reducer = (state = default_state,action) => {
  switch(action.type){
  case names.SET_TOKEN:
    return { ...state,token: action.token   }
  case names.REMOVE_TOKEN:
    return { ...state,token:null }
  case names.LOGIN:
    return { ...state,logged:true }
  case names.LOGOUT:
    return { ...state,logged:false }
  case names.SET_USER:
    return { ...state , username:action.username }
  default:
    return state
  }
}

export default reducer