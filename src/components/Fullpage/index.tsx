import React, { Component } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';

import * as S from './styles'


interface FullpageProps {
  children: JSX.Element[]
}


export default class Fullpage extends React.Component<FullpageProps>{
  constructor(props: FullpageProps){
    super(props)
  }
  render(){
    const { children } = this.props
    return (
      <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <div>
            {
              React
                .Children
                .toArray(children)
                .map((element) => (
                  <S.Section className="section"><S.SectionInner>{element}</S.SectionInner></S.Section>))
            }

            </div>
          )
        }
      }
      />
    )
  }
}