import React, { useState, useEffect } from 'react'
import { S } from './style'
import { useInput } from '../../../hook/useInput'
import AuthButton from '../AuthButton'
import { signInApi, signUpApi } from '../../../api/Auth'
import { useNavigate } from 'react-router'
// 회원가입 form
const AuthForm = ({ type }) => {
  const navigate = useNavigate()
  const [emailMessage, emailValid, emailValue, emailCheckValidation] =
    useInput('email')
  const [
    passwordMessage,
    passwordValid,
    passwordValue,
    passwordCheckValidation,
  ] = useInput('password')
  const [buttonAble, setButtonAble] = useState(true)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    switch (type) {
      case 'signin': // /signin 로그인 제출 폼
        signInApi(emailValue, passwordValue).then((res) => {
          try {
            localStorage.setItem('token', res.data.access_token)
            navigate('/todo')
          } catch (error) {
            console.log(error)
            alert('이메일과 비밀번호를 확인해 주십시오')
          }
        })
        break

      case 'signup': // /signup 회원가입 제출 폼
        signUpApi(emailValue, passwordValue).then((res) => {
          try {
            navigate('/signin')
          } catch (error) {
            alert('중복되는 이메일이 존재합니다')
          }
        })
        break
    }
  }

  useEffect(() => {
    if (emailValid.current === true && passwordValid.current === true) {
      setButtonAble(false)
    } else {
      setButtonAble(true)
    }
  }, [emailValid.current, passwordValid.current])
  return (
    <React.Fragment>
      <S.FormContainer onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          data-testid="email-input"
          onChange={emailCheckValidation('email')}
        />
        <span>
          {emailMessage.current.value === undefined ? emailMessage.current : ''}
        </span>
        <input
          type="text"
          name="password"
          placeholder="password"
          data-testid="password-input"
          onChange={passwordCheckValidation('password')}
        />
        <span>
          {passwordMessage.current.value === undefined
            ? passwordMessage.current
            : ''}
        </span>
        <AuthButton
          type={type}
          buttonAble={buttonAble}
          emailValue={emailValue}
          passwordValue={passwordValue}
        />
      </S.FormContainer>
    </React.Fragment>
  )
}

export default AuthForm
