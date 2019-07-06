import React from "react";
import Title from "./components/title";
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer";

function Notfound() {
  return (<div>
    <Title />
    <Jumbotron />
    <br />
    <div id = "containerBox">
      <h5>This site is not found. Try pressing the back button or following the link provided to get back to the homepage.</h5>
    </div>
    <Footer />
  </div>  
  );
}

export default Notfound;