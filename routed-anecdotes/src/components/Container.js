import React from 'react'

import { Menu } from './Menu'
import { Footer } from './Footer'

export const Container = ({ notification,children }) => (<>
  <Menu/>
  <div className={notification ? 'display-notification' : 'hide-notification'}>{notification}</div>
  {children}
  <Footer/>
</>)

