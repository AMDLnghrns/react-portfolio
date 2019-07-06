import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Title from "../title/index.js";
import Jumbotron from "../jumbotron/index.js";
import Footer from "../footer/index.js";
import SunAndRain from "../portfolio/images/Sun_and_Rain.jpg";
import ClimbingGif from "../portfolio/images/Climbing.gif";
// import BrokenAnkle from "../portfolio/images/BrokenAnklexray.jpg";
import AnyTimeIsTrainTime from "./images/TrainTime.png";
import WordGuessGame from "./images/Hangman.png";
import GIFGenerator from "./images/GIF_Generator.png";
import TastyDelicious from "./images/TastyDelicious.png";
import CrystalGame from "./images/CrystalGame.png";
import TriviaGame from "./images/TriviaGame.png";

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
              <Link to="/pictures"><img src= {SunAndRain} className="Hangman" alt="Sun and Rain"/></Link>
            </div>
            <div className="col-sm-3">
              <a href="https://amdlnghrns.github.io/AnyTimeIsTrainTime/"><img src= {AnyTimeIsTrainTime} className="Hangman" alt="climbing GIF"/></a>
            </div>
            <div className="col-sm-3">
              <a href="https://amdlnghrns.github.io/Word-Guess-Game/"><img src= {WordGuessGame} className="Hangman" alt="Xray of broken ankle"/></a>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-sm-3">
              <p>Pictures</p>
            </div>
            <div className="col-sm-3">
              <p>Any Time Is Train Time - <a href="https://github.com/AMDLnghrns/AnyTimeIsTrainTime">GitHub</a> </p>
            </div>
            <div className="col-sm-3">
              <p>Hangman - <a href="https://github.com/AMDLnghrns/Word-Guess-Game">GitHub</a></p>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-sm-3">
              <a href="https://amdlnghrns.github.io/GIF-Generator/"><img src= {GIFGenerator} className="Hangman" alt="GIF Generator"/></a>
            </div>
            <div className="col-sm-3">
              <a href="https://the-master-chefs.github.io/project1/"><img src= {TastyDelicious} className="Hangman" alt="Tasty Delicious"/></a>
            </div>
            <div className="col-sm-3">
              <a href="https://amdlnghrns.github.io/unit-4-game/"><img src= {CrystalGame} className="Hangman" alt="Crystal Game"/></a>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-sm-3">
              <p>GIF Generator - <a href="https://github.com/AMDLnghrns/GIF-Generator">GitHub</a></p>
            </div>
            <div className="col-sm-3">
              <p>Tasty Delicious - <a href="https://github.com/the-master-chefs/project1">GitHub</a></p>
            </div>
            <div className="col-sm-3">
              <p>Crystal Game - <a href="https://github.com/AMDLnghrns/unit-4-game">GitHub</a></p>
            </div>
          </div>
        </div>        
        
        <div>
          <div className="row">
            <div className="col-sm-3">
              <img src= {TriviaGame} className="Hangman" alt="Trivia Game"/>
            </div>
            <div className="col-sm-3">
              <img src= {ClimbingGif} className="Hangman" alt="Climbing GIF"/>
            </div>
            <div className="col-sm-3">
              <img src= {ClimbingGif} className="Hangman" alt="Climbing GIF"/>
            </div>
          </div>
        </div>

        <div>
          <div className="row">
            <div className="col-sm-3">
              <p>Trivia Game  - <a href="https://github.com/AMDLnghrns/TriviaGame">GitHub</a></p>
            </div>
            <div className="col-sm-3">
              <p>Placeholder</p>
            </div>
            <div className="col-sm-3">
              <p>Placeholder</p>
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
