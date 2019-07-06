import React from "react";
// import Title from "./components/title";
// import { Link } from "react-router-dom";
import "./style.css";
// import Jumbotron from "./components/jumbotron/index.js";
// import Container from "./components/container/index.js";
// import Footer from "./components/footer/index.js";
import AboutMe from "./components/aboutMe";
// import Portfolio from "./components/portfolio";
// import Contact from "./components/contact";

class App extends React.Component {
  // state = {
  //   page: AboutMe
  // };

  render() {
    return (
      <div className="App">
        <AboutMe />
      </div>
    );
  }
}

export default App;


// btn0 = () => {
//   // this.setState({vX: v0});
// };
// <Jumbotron />

// <br />
// <div className="row">
//   <div className="row text-center">
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-4 text-center">
//           <button type="button" id="btn0" className="btn btn-primary" onClick={this.btn0}>
//             button
//           </button>
//         </div>
//         <div className="col-sm-8 text-left">
//           <p>Paragraph</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <br />
// <Footer />



