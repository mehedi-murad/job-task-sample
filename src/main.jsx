import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './pages/Routes/Routes.jsx'
import AuthProvider from './pages/Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
