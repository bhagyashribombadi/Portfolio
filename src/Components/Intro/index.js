import React from "react";
import "./intro.css";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
const Intro = () => {
  return (
    <div className="container-fluid ">
      <div className="row con">
        <div className="col in-con ">
          <p className=" para1">Web Developer</p>
          <p className="  fs-3 fw-semibold">Hello I'm Bhagyashri Bombadi</p>
          <p className=" fs-6 fw-lighter">
            This PORTFOLIO reprsents accurate details about me
          </p>
          <FaInstagram />
          <FaLinkedinIn />
          <SiIndeed />
          <FaWhatsapp />
          <BsGithub />
        </div>
        <div className="col in-con "></div>
      </div>
    </div>
  );
};

export default Intro;
