import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/component-A">
            <ComponentA />
          </Route>
          <Route path="/component-B">
            <ComponentB />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
