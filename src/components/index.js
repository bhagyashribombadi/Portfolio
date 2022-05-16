import React from 'react'
import Aboutme from './aboutme/aboutme';
import Contact from './contact/contact';
import Intro from './intro/intro';
import Skill from './skill/skill';

const Portfolio = () => {
  return (
    <div>
        <Intro/>
        <Aboutme/>
        <Skill/>
        <Contact/>
    </div>
  )
}

export default Portfolio;