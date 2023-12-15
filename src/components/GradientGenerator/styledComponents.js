// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${props => props.gradient});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ffffff;
  text-align: center;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ededed;
`

export const UnOrderList = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const InputContainer = styled.div`
  display: flex;
`

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 22px;
  margin-left: 22px;
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ededed;
`

export const Input = styled.input`
  height: 36px;
  width: 72px;
  padding: 0px;
  border: 0px;
  background-color: transparent;
`
export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
  background-color: #00c9b7;
  margin-top: 22px;
  padding: 6px;
  width: 70px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`
