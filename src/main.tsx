import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './theme.css'

import { createGlobalStyle } from 'styled-components';
import { ProductProvider } from './contexts/ProductContext.tsx'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: sans-serif;
  }

  body{
  background-color: var(--background-color);
  color: var(--text-color);
}


html, body, #root {
  height: 100dvh;
  font-family: sans-serif;
}

#root {
  background-color: var(--background-color);
  color: var(--text-color);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

`;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <GlobalStyle />
      <App />
    </ProductProvider>
   
  </StrictMode>,
)
