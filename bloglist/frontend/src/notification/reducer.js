
import * as names from './names'
/**
 * @param {*} state = { visible : boolean , type: null | error | success,  message : string }
 * @param {*} action = { type: string , ...}
 */
const default_state = {
  visible:false,
  type: null,
  message:''
}
const reducer = (state = default_state,action) => {
  switch(action.type){
  case names.SUCCESS:
    return { ...state, type:'success',message:action.message }
  case names.ERROR:
    return { ...state, type:'error',message:action.message }
  case names.SHOW_NOTIFICATION:
    return { ...state,visible:true }
  case names.HIDE_NOTIFICATION:
    return { ...state, visible:false ,message:'',type:null }
  case names.RESET_NOTIFICATION:
    return default_state
  default:
    return state
  }
}

export default reducer