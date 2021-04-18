import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: #FB7F5A;
  margin: 0;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50%;
  width: 70%;
  margin: 2em;
`

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2em;
  padding: 1em 2em 1em 2em;
  background: #ffffffa0;
`

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFF;
  padding: 1em 2em 1em 2em;
`

export const FormChild = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2em;
  button, input {
    margin: 5px;
  }
`

export const DeleteButton = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    background: none;
    font-size: 2em;
    color: #CC5149;
  }
`
