import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background: rgb(0,116,137);
  background: linear-gradient(180deg, rgba(0,116,137,1) 30%, rgba(217,166,98,1) 62%, rgba(224,129,89,1) 84%);
  background: linear-gradient(180deg, #022F58 -13.43%, #2B8FAF 35.23%, #FBD4AD 75.29%, #FB7F5A 101.55%, rgba(255, 255, 255, 0) 100%);
  margin: 0;
`

export const H1 = styled.h1`
  margin-top: 200px;
  margin-left: 200px;
  color: #FFF;
  font-size: 4em;
`
export const LinkDiv = styled.div`
  background-color: inherit;
  font-size: 3em;
  text-align: center;
  margin: 0;
  border: 0;
  margin-bottom: 2em;
  a {
    color: #FFF;
    text-decoration: none;
    cursor: pointer;
  }
`
