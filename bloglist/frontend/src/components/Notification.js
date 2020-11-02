import React from 'react'
import { useSelector } from 'react-redux'

import Alert from 'react-bootstrap/Alert'

const Notification = () => {


  const { visible , message , type } =  useSelector(state => state.notification)
  if (!visible){
    return null
  }

  const variant = type !== 'success' ? 'warning' : type
  // return (<div data-test="notification"
  //   style={{
  //     background: 'white',
  //     border: `4px solid ${type === 'success' ? 'green' : 'red'}`,
  //     color :  type === 'success' ? 'green' : 'red'
  //   }}
  // >
  //   {message}
  // </div>
  // )}

  return (<Alert variant={variant}>
    <Alert.Heading>{message}</Alert.Heading>
  </Alert>)
}

export default Notification
