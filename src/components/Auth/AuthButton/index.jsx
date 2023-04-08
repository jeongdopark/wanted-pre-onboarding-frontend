import React from 'react'
import { useNavigate } from 'react-router'
import { DATA_TEST_ID, TEXT_TYPE, NAVIGATE_ID } from './constant'

const AuthButton = ({ type, buttonAble, emailValue, passwordValue }) => {
  console.log(type, buttonAble, emailValue, passwordValue)
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <button
        type="submit"
        data-testid={DATA_TEST_ID[type]}
        disabled={buttonAble}
      >
        제출
      </button>
      <button
        type="button"
        onClick={() => {
          console.log('click')
          navigate(`/${NAVIGATE_ID[type]}`)
        }}
      >
        {TEXT_TYPE[type]}으로 이동
      </button>
    </React.Fragment>
  )
}

export default AuthButton
