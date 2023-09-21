import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'

export default function RootStyles ({ children }: { children: ReactNode }) {
  return (
    <StyleProvider hashPriority='high'>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 4,
            colorPrimary: '#7474c9',
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
            fontSize: 12,
            colorTextPlaceholder: 'var(--h4)',
            colorBorder: 'var(--border)'
          },
          components: {
            Button: {},
            Select: {
              colorText: 'var(--h4)'
            },
            // Table: {
            //   borderColor: 'var(--divider)',
            //   headerBg: 'transparent',
            //   colorBgContainer: 'transparent',
            //   filterDropdownBg: 'white',
            //   headerColor: 'var(--h2-highlight)',
            //   headerFilterHoverBg: 'var(--hover)',
            //   headerSortActiveBg: 'var(--hover)',
            //   headerSortHoverBg: 'var(--hover)',
            //   rowHoverBg: 'var(--hover)',
            //   colorFillAlter: '#ebebf8',
            //   colorText: 'var(--h4)',
            //   lineWidth: 0.5,
            //   rowSelectedBg: 'transparent',
            //   fontWeightStrong: 500
            // }
            Table: {
              borderColor: 'var(--divider)',
              headerBg: 'transparent',
              colorBgContainer: 'transparent',
              filterDropdownBg: 'white',
              headerColor: 'var(--h2-highlight)',
              headerFilterHoverBg: 'var(--hover)',
              headerSortActiveBg: 'var(--hover)',
              headerSortHoverBg: 'var(--hover)',
              rowHoverBg: 'transparent',
              colorFillAlter: 'transparent',
              colorText: 'var(--h4)',
              lineWidth: 0.5,
              rowSelectedBg: 'transparent',
              fontWeightStrong: 500
            }
          }
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  )
}
