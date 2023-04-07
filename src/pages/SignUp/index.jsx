import React from 'react'
import { S } from './style'
import AuthForm from '../../components/Auth/AuthForm'

const SignUp = () => {
  return (
    <S.Container>
      <span>Sign up</span>
      <AuthForm type="signup" />
    </S.Container>
  )
}

export default SignUp
