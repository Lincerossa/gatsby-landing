import React from "react";

import * as S from "./styles";

export default class Sky extends React.PureComponent{

  render(){

    const { stars = 100, title,  background="black", color="white" } = this.props

    const s = new Array(stars).fill(true);

    return (
      <S.Sky background={background}>
        {s.map(star => (
          <S.Star
            left={`${100 * Math.random()}%`}
            top={`${100 * Math.random()}%`}
            dimension={`${3 * Math.random()}px`}
            color={color}
          />
        ))}
      </S.Sky>
    );
  }
  
  
};
