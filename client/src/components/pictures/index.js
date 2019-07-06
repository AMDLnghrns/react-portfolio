import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import Title from "../title/index.js";
import Jumbotron from "../jumbotron/index.js";
import Footer from "../footer/index.js";
import SunAndRain from "../portfolio/images/Sun_and_Rain.jpg";
import ClimbingGif from "../pictures/images/Climbing.gif";
import BrokenAnkle from "../pictures/images/BrokenAnklexray.jpg";
// import AnyTimeIsTrainTime from "./images/TrainTime.png";
// import WordGuessGame from "./images/Hangman.png";
// import GIFGenerator from "./images/GIF_Generator.png";
// import TastyDelicious from "./images/TastyDelicious.png";
// import CrystalGame from "./images/CrystalGame.png";
// import TriviaGame from "./images/TriviaGame.png";

function Portfolio() {
  return (
    <div>
      <Title />
      <Jumbotron />
      <section id="Portfolio"><h2>Photography</h2></section>
      <br />
      <div id = "containerBox">
        
        <div>
          <div className="row">
            <div className="col-sm-3">
              <img src= {SunAndRain} className="Hangman" alt="Sun and Rain"/>
            </div>
            <div className="col-sm-3">
              <img src= {ClimbingGif} className="Hangman" alt="climbing GIF"/>
            </div>
            <div className="col-sm-3">
              <img src= {BrokenAnkle} className="Hangman" alt="Xray of broken ankle"/>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-sm-3">
              <p>Pictures</p>
            </div>
            <div className="col-sm-3">
              <p>Climbing Lonesome Dove</p>
            </div>
            <div className="col-sm-3">
              <p>Broke my ankle</p>
            </div>
          </div>
        </div>
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

export default Portfolio;
