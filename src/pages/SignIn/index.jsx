import React from 'react'
import { S } from './style'
import AuthForm from '../../components/Auth/AuthForm'

const SignIn = () => {
  return (
    <S.Container>
      <span>Login</span>
      <AuthForm type="signin" />
    </S.Container>
  )
}

export default SignIn
