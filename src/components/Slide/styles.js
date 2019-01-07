import styled from 'styled-components'


export const Slide = styled.div`
  position: absolute;
  top: 0;
  left:  0;
  bottom: 0;
  right: 0;
  border: 3px solid red;
`

export const Title = styled.div`
  position: absolute;
  top:50%;
  left: 50%;
  width: 100%;
  padding: 0 2rem;
  text-align: center;
  transform: translate(-50%,-50%);


  @media screen and (min-width: 768px){
    font-size: 2rem;
  }

  @media screen and (min-width: 1024px){
    font-size: 4rem;
  }
`
