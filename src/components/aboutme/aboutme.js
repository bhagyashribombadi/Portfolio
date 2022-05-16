import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import "./aboutme.css";
const Aboutme = () => {
  return (
    <>
    <Container fluid={true} className="about-con">      
        <div className='about-div1'>
            <h2>About me</h2>
        <p>hello, I am Bhagyashri Bombadi</p>
        </div>  
        <div className="about-div2">
            <p>Welcome to my portfolio. </p>
            <p>I have done Bachelor's in Information Technology</p>
            <p>Currently I am pursuing my Master's in Information Technology</p>
            <p>I am Fresher looking for job  and this is my short term goal,</p>
            <p> My long term goal is to achieve success in my career and to support my organization too </p>
            
        </div> 
    </Container>
    </>
  )
}

export default Aboutme