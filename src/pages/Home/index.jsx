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
      <span>Todo App</span>
      <S.ButtonWrapper>
        <S.Button onClick={() => onNavigate('signin')}>LOGIN</S.Button>
        <S.Button onClick={() => onNavigate('signup')}>SIGN UP</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}

export default Home
