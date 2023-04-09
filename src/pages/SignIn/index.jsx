import React from 'react'
import { S } from './style'
import AuthForm from '../../components/Auth/AuthForm'
import { CommonTitle } from '../../style/commonTitle'

const SignIn = () => {
  return (
    <S.Container>
      <CommonTitle>Log in</CommonTitle>
      <AuthForm type="signin" />
    </S.Container>
  )
}

export default SignIn
