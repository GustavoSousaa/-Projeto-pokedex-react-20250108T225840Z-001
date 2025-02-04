import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './Router'
import './index.css'
import { PokemonContextProvider } from './contexts/PokemonContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <Router />
    </PokemonContextProvider>
  </React.StrictMode>,
)
