import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Button from 'react-bootstrap/Button'

const Togglable = ({ children }) => {
  const [visible , setVisible ] = useState(false)
  const islogged = useSelector(state => state.login.logged)
  const toogleVisibility = () => setVisible(visible => !visible)
  if (!islogged){
    return null
  }
  return (<div>
    { children(visible,toogleVisibility)}
    <Button className='m-2' variant='outline-primary' data-test="show-form-blog" onClick={() => setVisible(state => !state)}>{visible ? 'cancel' : 'create blog' }</Button>
  </div>)

}


export default Togglable