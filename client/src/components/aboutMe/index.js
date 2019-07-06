import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import Title from "../title/index.js";
import Jumbotron from "../jumbotron/index.js";
import Footer from "../footer/index.js";
import Anthony_Portrait from "../aboutMe/Anthony_Portrait.JPG";

function AboutMe() {
  return (
    <div>
      <Title />
      <Jumbotron />
      <section id="About_Me"><h2>About Me</h2></section>
      <div id = "containerBox">
        <br />
        <img className="Anthony_Portrait" width = "150px" src= {Anthony_Portrait} alt="Portrait of Anthony Duncan"/>
        <p className= "Paragraph_1">
          <br />
          My name is Anthony Duncan. I currently work as a Systems/Database Administrator for Texas Disposal Systems. I not only work as a Data Analyst for the HR department, I help with the maintenance, functionality, and configuration of our 19 systems, including Oracle and ADP. We did not want to have to pull reporting from all of our systems, so we set up the systems to drop reporting into an SFTP site, where with the help of SSIS, we pull them and drop the data into a database, allowing us to query across all of our systems to build reports. That is the third system I am tasked with maintaining. 
        </p>
        <p className="Paragraph_2">
          I like to spend my free time with rock climbing and adventure photography. Climbing can be challenging, but is a great way to get outside. I have been climbing since 2007. I mostly like to climb in Austin at Seismic Wall, Gus Fruh Wall, and New Wall. On the weekends, I will make the trek out to Reimer's Ranch or, weather permitting, I'll go to Lake Travis and Deep Water Solo. Climbing is a lot of fun, but it can be dangerous too. I broke my ankle in October of 2018, and have been sidelined since, but am extremely excited to get back out there.
        </p> 
        <p className = "Paragraph_3">
          When I was a freshman at Cypress Falls High School, I started working with my dad in photography, before beginning to study photojournalism as well. I enjoyed photography when I was younger, but it was not until I graduated college before I really began to take pictures again. My most recent ones are from the lunar eclipse.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default AboutMe;
