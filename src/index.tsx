import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/reset.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
       box-sizing: border-box;
    }
    html {
      font-size: 70%;
      @media (min-width: 768px) {
        font-size: 80%;
      }
      @media (min-width: 1024px) {
        font-size: 90%;
      }
      @media (min-width: 1200px) {
        font-size: 100%;
      }
    }
    
    body {
      font-size: 1em;
      font-family: 'Roboto', sans-serif;
      user-select: none;
    }
  `

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
