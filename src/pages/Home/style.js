import styled from 'styled-components'
import { CommonContainer } from '../../style/commonContainer'

const Container = styled(CommonContainer)``

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`

const Button = styled.button`
  width: 70px;
  height: 50px;
`

export const S = {
  Container,
  ButtonWrapper,
  Button,
}
