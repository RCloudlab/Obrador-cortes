import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // <--- 1. Agrega esto
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. Envuelve tu App con el Provider */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)