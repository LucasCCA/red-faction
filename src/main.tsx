import React from 'react'
import ReactDOM from 'react-dom/client' //Document Object Model - Representaçao do HTML atraves do JS
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
