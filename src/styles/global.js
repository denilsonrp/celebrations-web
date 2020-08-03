import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    background: #f0f0f5;
    color: #383838;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  #root {
    height: 100%;
    position: relative;
  }
`

export default GlobalStyle