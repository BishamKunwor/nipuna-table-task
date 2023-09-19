import { ReactNode } from 'react'
import NavBar from '../NavBar/Index'

export default function Layout ({ children }: { children?: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
