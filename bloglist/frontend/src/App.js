import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Blogs from './components/Blogs'

import Notification from './components/Notification'
import Users from './components/Users'
import Navigation from './components/Navigation'

import * as blogActions from './blogs/actions'
import * as loginActions from './login/actions'
import * as usersActions from './users/actions'

import UserBlog from './components/UserBlog'
import BlogDetails from './components/BlogDetails'

import Container from 'react-bootstrap/Container'

import FormLogin from './components/FormLogin'
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(blogActions.getAll())
    dispatch(usersActions.getAll())
    dispatch(loginActions.getToken())
  }, [dispatch])

  return (
    <div>
      <Navigation />

      <Notification />

      <FormLogin/>

      <Container fluid>
        <Switch>
          <Route path="/users/:id">
            {({ match: { params } }) => <UserBlog {...params} />}
          </Route>
          <Route path="/users" component={Users} />
          <Route path="/blogs/:id">
            {({ match: { params } }) => <BlogDetails {...params} />}
          </Route>
          <Route to="/">
            <Blogs />
          </Route>
        </Switch>
      </Container>
    </div>
  )
}

export default App
