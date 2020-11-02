import React,{ useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'
import Button from 'react-bootstrap/button'

import { setLogin ,hideLoginForm } from '../login/actions'

const FormLogin = () => {
  const [user, setUser] = useState({ username: '', password: '' })
  const dispatch = useDispatch()
  const handlerLog = ({ target }) => {
    setUser((user) => ({ ...user, [target.name]: target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    dispatch(setLogin(user))
    dispatch(hideLoginForm())
    setUser((user) => ({ ...user, password: '' }))
  }

  const showForm = useSelector(state => state.login.showForm)

  if (!showForm)
    return null

  return (
    <Form  className="w-25 m-4" data-test="login-form" onSubmit={handleSubmit}>
      <Form.Group as={Row}>
        <Form.Label>
      user name
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            name="username"
            onChange={handlerLog}
            value={user.username}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label>
      password
        </Form.Label>
        <Col>
          <Form.Control
            type="password"
            name="password"
            onChange={handlerLog}
            value={user.password}
          />
        </Col>
      </Form.Group>
      <Button className="mx-2"variant="outline-primary" type="submit">
    Submit
      </Button>
      <Button className="mx-2" variant="info"  onClick={ () => dispatch(hideLoginForm())}>cancel</Button>

    </Form>)
}

export default FormLogin