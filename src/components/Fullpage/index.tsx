import React, { Component } from 'react'

import * as S from './styles'

import fullpage from 'fullpage.js'

interface FullpageProps {
  children: JSX.Element[]
}



export default class Fullpage extends React.Component<FullpageProps>{
  constructor(props: FullpageProps){
    super(props)
    this.myFullPage = React.createRef()
    this.handleFullPageInstantiation = this.handleFullPageInstantiation.bind(this)
  }

  handleFullPageInstantiation(){
    const myFullPageIntance = new fullpage(this.myFullPage.current,  {
      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors:['firstPage', 'secondPage'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide'],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',
    
      //Scrolling
      css3: true,
      scrollingSpeed: 1900,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: false,
      scrollOverflowReset: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,
    
      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,
    
      //Design
      controlArrows: true,
      verticalCentered: true,
      paddingTop: '0',
      paddingBottom: '0',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    
      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',
    
      lazyLoading: true,
    
      //events
      onLeave: function(origin, destination, direction){},
      afterLoad: function(origin, destination, direction){},
      afterRender: function(){},
      afterResize: function(width, height){},
      afterResponsive: function(isResponsive){},
      afterSlideLoad: function(section, origin, destination, direction){},
      onSlideLeave: function(section, origin, destination, direction){}
    })
  }


  componentDidMount(){
    this.handleFullPageInstantiation()
  }

  render(){
    const { children } = this.props
    return (
      <div ref={this.myFullPage}>
        {
          React
            .Children
            .toArray(children)
            .map((element) => (
              <S.Section className="section"><S.SectionInner>{element}</S.SectionInner></S.Section>))}
      </div>

    )

  }

}