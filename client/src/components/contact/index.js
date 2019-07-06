import React from "react";
import "./style.css";
import Title from "../title/index.js";
import Jumbotron from "../jumbotron/index.js";
import Footer from "../footer/index.js";
import "typeface-roboto";
// import Button from "@material-ui/core/Button";

function Contact() {
  return (<div>
    <Title />
    <Jumbotron />
    <section id="Contact"><h2>Contact</h2></section>
    <br />
    <div id = "containerBox">
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name:</label>
          <input type="text" className="form-control" id="exampleFormControlInput1"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address:</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <input id="submit" type="submit" value="Submit"></input>
      </form>
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

export default Contact;
