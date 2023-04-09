import styled from 'styled-components'
import { CommonContainer } from '../../style/commonContainer'
import { CommonTitle } from '../../style/commonTitle'
import { CommonButton } from '../../style/commonButton'

const Container = styled(CommonContainer)`
  justify-content: start;
`

const Title = styled(CommonTitle)`
  margin-bottom: 30px;
`

const Header = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`

const LogoutButton = styled(CommonButton)`
  position: absolute;
  right: 0px;
  height: 30px;
  background-color: black;
  color: white;
  margin-left: 30px;
`

export const S = {
  Container,
  Title,
  Header,
  LogoutButton,
}
