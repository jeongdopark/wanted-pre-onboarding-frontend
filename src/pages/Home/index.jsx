import React from 'react'
import { S } from './style'
import { useNavigate } from 'react-router'
const Home = () => {
  const navigate = useNavigate()

  const onNavigate = (path) => {
    navigate(`/${path}`)
  }

  return (
    <S.Container>
      <div>로그인 후 이용해 주세요</div>
      <S.ButtonWrapper>
        <S.Button onClick={() => onNavigate('signin')}>로그인</S.Button>
        <S.Button onClick={() => onNavigate('signup')}>회원가입</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}

export default Home
