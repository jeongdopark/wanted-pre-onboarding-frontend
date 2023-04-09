import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Button = styled.button`
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 7px;
  margin-bottom: 20px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`

export const S = {
  Container,
  Button,
}
