import React from 'react'
import { GlobalStyle } from './style/globalStyled'
import AppRouter from './routes'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppRouter />
    </React.Fragment>
  )
}

export default App
