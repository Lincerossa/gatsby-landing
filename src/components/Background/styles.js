import styled from 'styled-components'


export const Background = styled.div`
  background-color: ${props => props.color.background};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: ${props => props.color.text};
  * {
    color: ${props => props.color.text};
  }
`
