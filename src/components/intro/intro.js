import "./intro.css";
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
  return (
    <>
    
    <Container fluid={true} className="intro">
        <div className="Cont">
        <div className="cont1">
        <h3>Hello, My name is</h3>
        <h4> Bhagyashri Bombadi</h4>
        <div className="title">
            <div className="title-wrap">
            <div className="title-item">Web Developer</div>
           
            </div>
        </div>
        </div>
        <div className="cont2">
            <img src="/image/bhagu.jpg" height={"200px"} width={"200px"} alt='' className="intro-img"/>
        </div>
        </div>
        
    </Container>
  
    </>
  )
}

export default Intro;