import React from 'react'
import { S } from './style'
import Login from '../../components/Auth/SignIn'

const SignIn = () => {
  return (
    <S.Container>
      <span>Login</span>
      <Login />
    </S.Container>
  )
}

export default SignIn
