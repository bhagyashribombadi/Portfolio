import React from "react";
import Intro from "../component/intro/intro";
import Aboutme from "../component/aboutme/aboutme";
import Skill from "../component/skill/skill";
import Contact from "../component/contact/contact";
import { SiKaggle } from "react-icons/si";

const Portfolio = () => {
  return (
    <div>
      <Intro />
      <Aboutme />
      <Skill />
      <Contact />
    </div>
  );
};

export default Portfolio;
