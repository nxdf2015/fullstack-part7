import React from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Alert from 'react-bootstrap/alert'
import { useSelector } from 'react-redux'

const Navigation = () => {
  const { isLogged,username } = useSelector(state => ({ isLogged : state.login.logged ,username : state.login.username }) )
  return (<Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home"><div  className="display-4 font-weight-bold">blog App</div ></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav   className="mr-auto">
        <Nav.Item  className="mx-2"> <Link to='/'>blogs</Link></Nav.Item>
        <Nav.Item className="mx-2"><Link to='/users'>users</Link> </Nav.Item>
        <Nav.Item className="mx-2">{isLogged ?  <Alert variant='info'> {`${ username} logged in`}</Alert> : 'not logged'}</Nav.Item>

      </Nav>

      <Login className="mr-2"/>
    </Navbar.Collapse>
  </Navbar>)
}

export default Navigation