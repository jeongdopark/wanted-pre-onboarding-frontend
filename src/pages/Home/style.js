import styled from 'styled-components'
import { CommonContainer } from '../../style/commonContainer'

const Container = styled(CommonContainer)`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  span {
    font-size: 2rem;
    font-weight: 600;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`

const Button = styled.button`
  cursor: pointer;
  width: 40%;
  height: 40px;
  border: none;
  border-radius: 7px;
`

export const S = {
  Container,
  ButtonWrapper,
  Button,
}
