import React from 'react'
import ReactDOMClient from 'react-dom/client'
import ReactDOM  from 'react-dom'
import App from './App/index'
import './index.css'

ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)