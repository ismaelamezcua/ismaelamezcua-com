import type { FC, ReactNode, ReactElement } from 'react'
import Navbar from './Navbar'
import NewNav from './NewNav'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }): ReactElement => {
  return (
    <>
      <NewNav />
      <Navbar />
      {children}
    </>
  )
}

export default Layout
