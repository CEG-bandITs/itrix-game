import React from 'react'
import ReactDOM from 'react-dom/client'
import RootPage from './RootPage'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Rendering RootPage Into Dom
root.render(
  <React.StrictMode>
    <RootPage />
  </React.StrictMode>,
)
