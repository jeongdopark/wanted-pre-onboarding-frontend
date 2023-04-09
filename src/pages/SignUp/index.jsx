import React from 'react'
import { S } from './style'
import AuthForm from '../../components/Auth/AuthForm'

const SignUp = () => {
  return (
    <S.Container>
      <S.Title>Sign up</S.Title>
      <AuthForm type="signup" />
    </S.Container>
  )
}

export default SignUp
