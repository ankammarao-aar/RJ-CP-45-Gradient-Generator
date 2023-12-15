// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 12px;
`

export const Button = styled.button`
  font-family: 'Roboto';
  color: #1e293b;
  opacity: ${props => (props.dark ? 1 : 0.5)};
  width: 100px;
  padding: 6px;
  margin-left: 2px;
  margin-right: 2px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 70px;
  }
`
