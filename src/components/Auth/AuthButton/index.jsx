import React from 'react'
import { useNavigate } from 'react-router'
import { DATA_TEST_ID, TEXT_TYPE, NAVIGATE_ID } from './constant'
import { S } from './style'

const AuthButton = ({ type, buttonAble, emailValue, passwordValue }) => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Button
        type="submit"
        data-testid={DATA_TEST_ID[type]}
        disabled={buttonAble}
      >
        제출
      </S.Button>
      <S.Button
        type="button"
        onClick={() => {
          navigate(`/${NAVIGATE_ID[type]}`)
        }}
      >
        {TEXT_TYPE[type]}으로 이동
      </S.Button>
    </S.Container>
  )
}

export default AuthButton
