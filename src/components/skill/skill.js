import React from 'react'
import { Container } from 'react-bootstrap';
import "./skill.css"
const Skill = () => {
  return (
      <>
    <Container fluid={true} className="Skill-cont">
        <div className="skill-cont1">
        <div className='skill-title'>
          <h2>Skills</h2>
        </div>
        <div className="skill-cont2" >
            <img src="/image/html.png" alt='HTML' className="skill-img"/>
            <img src="/image/reactjs.png" alt='ReactJs' className="skill-img"/>
            <img src="/image/nodejs.png" alt='NodeJs' className="skill-img"/>
            <img src="/image/mongo.png" alt='MongoDB' height={"100px"} width={"100px"} className="skill-img"/>
            <img src="/image/java.png" alt='Javascript' className="skill-img"/>
            <img src="/image/github.png" alt='Github'className="skill-img"/>
        </div>
        </div>
    </Container>
  </>
  )
}

export default Skill;