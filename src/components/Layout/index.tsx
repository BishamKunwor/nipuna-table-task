import { ReactNode } from 'react'
import NavBar from '../NavBar'
import SideBarMenu from '../SideBarMenu'

export default function Layout ({ children }: { children?: ReactNode }) {
  return (
    <>
      <NavBar />
      <SideBarMenu>{children}</SideBarMenu>
    </>
  )
}
