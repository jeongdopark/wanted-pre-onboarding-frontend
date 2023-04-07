import React from 'react'
import { useNavigate } from 'react-router'

const AuthButton = ({ type, buttonAble }) => {
  const navigate = useNavigate()
  const DATA_TEST_ID = {
    // 요구사항 data-testid
    //회원가입 페이지에는 회원가입 button에 data-testid="signup-button" 속성을 부여해주세요
    //로그인 페이지에는 로그인 button에 data-testid="signin-button" 속성을 부여해주세요
    signup: 'signup-button',
    signin: 'signin-button',
  }
  const TEXT_TYPE = {
    // signup 페이지일 경우 로그인 페이지로 이동하는 문구 필요, signin 페이지일 경우 회원가입으로 이동하는 문구 필요. 반대되는 text 필요.
    signup: '로그인',
    signin: '회원가입',
  }
  return (
    <React.Fragment>
      <button data-testid={DATA_TEST_ID[type]} disabled={buttonAble}>
        제출
      </button>
      <button onClick={() => navigate(`/${type}`)}>
        {TEXT_TYPE[type]}으로 이동
      </button>
    </React.Fragment>
  )
}

export default AuthButton
