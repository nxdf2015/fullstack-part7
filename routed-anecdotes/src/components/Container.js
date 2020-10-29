import React from 'react'

import { Menu } from './Menu'
import { Footer } from './Footer'

export const Container = ({ children }) => (<>
  <Menu/>
  {children}
  <Footer/>
</>)

