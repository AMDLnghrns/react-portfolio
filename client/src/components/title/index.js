import React from "react";
import "./style.css";

function Title() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link disabled" href="/aboutMe" tabIndex="-1" aria-disabled="true"><h4>Anthony Duncan</h4></a>
        </li>
        <section id="Blank"></section>
        <li className="nav-item" id="link">
          <a className="nav-link active" href="./aboutMe">About Me</a>
        </li>
        <li className="nav-item" id="link">
          <a className="nav-link" href="./portfolio">Photography</a>
        </li>
        <li className="nav-item" id="link">
          <a className="nav-link" href="./contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Title;