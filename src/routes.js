import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Todo from './pages/Todo'
import Home from './pages/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
