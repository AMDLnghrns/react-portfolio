import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import aboutMe from "./components/aboutMe";
import contact from "./components/contact";
import portfolio from "./components/portfolio";
import pictures from "./components/pictures";
import notfound from "./notfound";
import App from "./App";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/aboutMe" component={aboutMe} />
        <Route exact path="/portfolio" component={portfolio} />
        <Route exact path="/pictures" component={pictures} />
        <Route exact path="/contact" component={contact} />
        <Route component={notfound} />
      </Switch>
    </div>
  </Router>
);


ReactDOM.render(routing, document.getElementById("root"));
