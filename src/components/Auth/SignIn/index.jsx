import React from 'react'
import { S } from './style'
import { useNavigate } from 'react-router'
// 로그인 form
const LoginForm = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <S.InputContainer>
        <input placeholder="email" data-testid="email-input" />
        <span>''</span>
        <input placeholder="password" data-testid="password-input" />
        <span>''</span>
      </S.InputContainer>
      <button data-testid="signin-button">ok</button>
      <button onClick={() => navigate('/signup')}>회원가입으로 이동</button>
    </React.Fragment>
  )
}

export default LoginForm
