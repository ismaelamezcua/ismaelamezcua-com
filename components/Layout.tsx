import type { FC, ReactNode, ReactElement } from 'react'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }): ReactElement => {
  return (
    <>
      {children}
    </>
  )
}

export default Layout
