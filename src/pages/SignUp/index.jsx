import React from 'react'
import { S } from './style'
import SignUpForm from '../../components/Auth/Signup'

const SignUp = () => {
  return (
    <S.Container>
      <span>Sign up</span>
      <SignUpForm />
    </S.Container>
  )
}

export default SignUp
