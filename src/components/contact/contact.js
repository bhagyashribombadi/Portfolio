import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./contact.css"
import { SiGmail } from 'react-icons/si';
import {IoMdCall} from "react-icons/io";
const Contact = () => {
  return (
    <>
    <Container fluid={true} className="Contact-con">
      
        
      <div className='contact-title'>
        <h2>Contact</h2>
      </div>
      
      
    <div className="con-con">
       
        <h2><SiGmail/> <a className='emailContact' href='mailto:bhagu1909@gmail.com'>bhagu1909@gmail.com</a></h2>
        <h2><IoMdCall/> 9653230930</h2>
     
    </div>
    
   
    </Container>
    </>
  )
}

export default Contact;