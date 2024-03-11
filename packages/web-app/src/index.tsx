import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './app'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const root = ReactDOM.createRoot(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById('root')!
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
