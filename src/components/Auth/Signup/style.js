import styled from 'styled-components'
import { CommonContainer } from '../../../style/commonContainer'

const Container = styled(CommonContainer)``
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin: 5px;
  }

  span {
    width: 200px;
    height: 30px;
    margin: 5px;
    font-size: 12px;
  }
`

const ButtonContainer = styled.div``

export const S = {
  Container,
  InputContainer,
  ButtonContainer,
}
