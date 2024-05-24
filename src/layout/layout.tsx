import React, { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
interface props {
  children: ReactNode
}
const Layout = ({ children }: props) => {
  return <NextUIProvider>{children}</NextUIProvider>
}

export default Layout
