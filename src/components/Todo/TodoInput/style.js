import styled from 'styled-components'
import { CommonButton } from '../../../style/commonButton'

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-bottom: 20px;

  input {
    width: 60%;
    border: none;
    margin-right: 20px;
    border-bottom: 1px solid #cccccc;
    outline: none;
  }
`

const Button = styled(CommonButton)`
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  cursor: pointer;
`

export const S = {
  FormContainer,
  Button,
}
