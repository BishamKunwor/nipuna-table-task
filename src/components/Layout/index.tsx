import { ReactNode } from 'react'
import NavBar from '../NavBar'
import SideBarMenu from '../SideBarMenu'
import DashBoard from '../Dashboard'

export default function Layout ({ children }: { children?: ReactNode }) {
  return (
    <>
      <NavBar />
      <SideBarMenu>
        <DashBoard>{children}</DashBoard>
      </SideBarMenu>
    </>
  )
}
