import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Todo from './pages/Todo'
import Home from './pages/Home'
import PrivatePage from './pages/Auth/PrivatePage'
import PublicPage from './pages/Public/PublicPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Route>
        <Route element={<PrivatePage />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
