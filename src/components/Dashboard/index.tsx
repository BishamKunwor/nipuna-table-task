import { ReactNode } from 'react'
import ClientHeader from '../ClientsHeader'
import TableFilters from '../TableFilters'

export default function DashBoard ({ children }: { children: ReactNode }) {
  return (
    <section className='h-full'>
      <ClientHeader />
      <TableFilters>{children}</TableFilters>
    </section>
  )
}
