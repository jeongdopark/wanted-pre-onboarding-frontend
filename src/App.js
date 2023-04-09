import React from 'react'
import { GlobalStyle } from './style/globalStyled'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import AppRouter from './routes'

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer position="top-right" autoClose="1500" />
      <GlobalStyle />
      <AppRouter />
    </React.Fragment>
  )
}

export default App
