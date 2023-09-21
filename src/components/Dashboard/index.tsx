import { ReactNode } from 'react'
import ClientHeader from '../ClientsHeader'
import TableFilters from '../TableFilters'

export default function DashBoard ({ children }: { children: ReactNode }) {
  return (
    <section>
      <ClientHeader />
      <TableFilters>{children}</TableFilters>
    </section>
  )
}
