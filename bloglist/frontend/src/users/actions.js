import * as names from './names'
import userService from '../services/users'
import { errorNotification } from '../notification/action'
const addUser  = users => ({
  type: names.ADD_USER,
  users
})

export const removeUser = user => ({
  type: names.REMOVE_USER,
  user
})


export const getAll = () => dispatch => {
  userService.getAll()
    .then(users => dispatch(addUser(users)))
    .catch(() =>  dispatch(errorNotification('error request   get all users')))
}


