import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider hashPriority='high'>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 4,
            colorPrimary: '#7474c9'
          },
          components: {
            Button: {
            },
            Input: {}
          }
        }}
      >
        <App />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>
)
