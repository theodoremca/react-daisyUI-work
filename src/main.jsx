import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouterApp, BrowserRouterWithMapApp, RouterProviderApp } from './AppRouter'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProviderApp/>
  </React.StrictMode>,
)





