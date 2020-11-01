import axios from 'axios'

const url_api = 'http://localhost:3001/api'

const getAll = async () => {
  const users = await axios.get(`${url_api}/users`)

  return users.data
}

const create =  async ({ username , password }) => {

  const response =   await  axios.post(`${url_api}/login`, { username, password })

  return response



}

const decodeToken = async (token) => {

  const response = await axios.get(`${url_api}/users/name`, { params : { token } } )

  return response
}


export default  { create ,decodeToken ,getAll }