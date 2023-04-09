import styled from 'styled-components'
import { CommonContainer } from '../../style/commonContainer'

const Container = styled(CommonContainer)`
  height: 400px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ButtonContainer = styled.div``

export const S = {
  Container,
  InputContainer,
  ButtonContainer,
}
