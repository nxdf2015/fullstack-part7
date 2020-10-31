import { SUCCESS,ERROR ,SHOW_NOTIFICATION,HIDE_NOTIFICATION,RESET_NOTIFICATION } from './names'


const success = message => ({
  type: SUCCESS,
  message
})

const error = message => ({
  type: ERROR,
  message
})

const show = () => ({
  type: SHOW_NOTIFICATION

})

const hide = () => ({
  type:HIDE_NOTIFICATION
})

const reset = ()  => ({
  type: RESET_NOTIFICATION
})


let idTimeout = undefined
const  resetNotification = () => dispatch => {
  clearTimeout(idTimeout)
  dispatch(reset())
}

const notify  = typeNotification => (message, delay = 3000) => dispatch => {
  dispatch(typeNotification(message))

  if (idTimeout){

    dispatch(resetNotification())
  }

  dispatch(show())
  idTimeout = setTimeout(() => {dispatch(hide())
    idTimeout = undefined
  }, delay )

}


export const successNotification = notify(success)
export const errorNotification = notify(error)
