import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './assets/AuthContext.jsx'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,

)
