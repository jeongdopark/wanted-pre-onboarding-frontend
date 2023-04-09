import styled from 'styled-components'
import { CommonContainer } from '../../../style/commonContainer'

const Container = styled(CommonContainer)``
const FormContainer = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  input {
    margin: 5px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }

  span {
    width: 200px;
    height: 30px;
    margin: 5px;
    font-size: 12px;
  }
`

const WranningText = styled.span`
  width: 200px;
  height: 30px;
  margin: 5px;
  font-size: 8px;
  color: red;
`

const ButtonContainer = styled.div``

export const S = {
  Container,
  FormContainer,
  ButtonContainer,
  WranningText,
}
