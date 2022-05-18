import type { FC, ReactNode, ReactElement } from 'react'
import Navbar from './Navbar'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }): ReactElement => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
