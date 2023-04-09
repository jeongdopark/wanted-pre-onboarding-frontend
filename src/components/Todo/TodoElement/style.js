import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;

  li {
    width: 100%;
    display: flex;
    justify-content: start;
    margin: 5px;
  }

  label {
    display: flex;
    align-items: center;

    input {
      border: none;
      margin-right: 20px;
      border-bottom: 1px solid #cccccc;
      outline: none;
    }
  }
`

export const S = {
  Container,
}
