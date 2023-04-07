import React, { useState, useEffect } from 'react'
import { S } from './style'
import { useNavigate } from 'react-router'
import { useInput } from '../../../hook/useInput'
// 회원가입 form
const SignUpForm = () => {
  const navigate = useNavigate()
  const [emailMessage, emailValid, emailCheckValidation] = useInput('email')
  const [passwordMessage, passwordValid, passwordCheckValidation] =
    useInput('password')
  const [buttonAble, setButtonAble] = useState(true)

  useEffect(() => {
    console.log(buttonAble, emailValid.current, passwordValid.current)
    if (emailValid.current === true && passwordValid.current === true) {
      setButtonAble(false)
    } else {
      setButtonAble(true)
    }
  }, [emailValid.current, passwordValid.current])
  return (
    <React.Fragment>
      <S.InputContainer>
        <input
          placeholder="email"
          data-testid="email-input"
          onChange={emailCheckValidation('email')}
        />
        <span>
          {emailMessage.current.value === undefined ? emailMessage.current : ''}
        </span>
        <input
          placeholder="password"
          data-testid="password-input"
          onChange={passwordCheckValidation('password')}
        />
        <span>
          {passwordMessage.current.value === undefined
            ? passwordMessage.current
            : ''}
        </span>
      </S.InputContainer>
      <button data-testid="signup-button" disabled={buttonAble}>
        ok
      </button>
      <button onClick={() => navigate('/signin')}>로그인으로 이동</button>
    </React.Fragment>
  )
}

export default SignUpForm
