import React from 'react'
import Fullpage from '../components/Fullpage';
import Sky from '../components/Sky';
import Slide from '../components/Slide';
import Background from '../components/Background';

export default () => (
  <Fullpage>
    <Slide title="Bormiini Paracelli">
      <Sky />
    </Slide>
    <Background color={{text: "black", background: "white"}}>
      <Slide title="Lorem ipsum dolor sit amet"/>
    </Background>
    <Background color={{text: "white", background: "black"}}>
      <Slide title="Lorem ipsum dolor sit amet"/>
    </Background>
    <Background color={{text: "red", background: "white"}}>
      <Slide title="Lorem ipsum dolor sit amet"/>
    </Background>
  </Fullpage>
)