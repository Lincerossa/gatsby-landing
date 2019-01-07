import React from 'react'
import * as S from './styles'

const Slide = ({ children, title }) => (
  <S.Slide>
    <S.Title>{title}</S.Title>
    {children}
  </S.Slide>
)

export default Slide
