import * as names from './names'

const default_state = { token : localStorage.getItem('token') , username : ''  , logged : false ,showForm:false }

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
  case names.SHOW_LOGIN_FORM:
    return { ...state,showForm:true }
  case names.HIDE_LOGIN_FORM:
    return { ...state, showForm:false }
  default:
    return state
  }
}

export default reducer