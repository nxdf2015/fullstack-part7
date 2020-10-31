import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Togglable = ({ children }) => {
  const [visible , setVisible ] = useState(false)
  const islogged = useSelector(state => state.login.logged)
  const toogleVisibility = () => setVisible(visible => !visible)
  if (!islogged){
    return null
  }
  return (<div className="container">
    { children(visible,toogleVisibility)}
    <button data-test="show-form-blog" onClick={() => setVisible(state => !state)}>{visible ? 'cancel' : 'create blog' }</button>
  </div>)

}


export default Togglable