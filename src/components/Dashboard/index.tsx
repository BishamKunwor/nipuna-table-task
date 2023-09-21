import { ReactNode } from 'react'
import ClientHeader from '../ClientsHeader'
import TableFilters from '../TableFilters'
import { ConfigProvider } from 'antd'

export default function DashBoard ({ children }: { children: ReactNode }) {
  return (
    <section>
      <ClientHeader />
      <ConfigProvider
        theme={{
          components: {
            Input: {
              paddingBlock: 6,
              paddingInline: 8
            }
          }
        }}
      >
        <TableFilters>{children}</TableFilters>
      </ConfigProvider>
    </section>
  )
}
