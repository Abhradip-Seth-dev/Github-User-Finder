import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UiContextProvider from './Context/UiContext.jsx'

createRoot(document.getElementById('root')).render(
  <UiContextProvider>

  <StrictMode>
    <App />
  </StrictMode>
  </UiContextProvider>
)
