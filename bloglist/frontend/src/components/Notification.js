import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {


  const { visible , message , type } =  useSelector(state => state.notification)
  if (!visible){
    return null
  }

  return (<div data-test="notification"
    style={{
      background: 'white',
      border: `4px solid ${type === 'success' ? 'green' : 'red'}`,
      color :  type === 'success' ? 'green' : 'red'
    }}
  >
    {message}
  </div>
  )}

export default Notification
