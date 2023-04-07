import React, { useState, useEffect } from 'react'
import { S } from './style'
import { useInput } from '../../../hook/useInput'
import AuthButton from '../AuthButton'
// 회원가입 form
const AuthForm = ({ type }) => {
  const [emailMessage, emailValid, emailCheckValidation] = useInput('email')
  const [passwordMessage, passwordValid, passwordCheckValidation] =
    useInput('password')
  const [buttonAble, setButtonAble] = useState(true)

  useEffect(() => {
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
      <AuthButton type={type} buttonAble={buttonAble} />
    </React.Fragment>
  )
}

export default AuthForm
