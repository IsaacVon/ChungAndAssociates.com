import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./components/history";

import Navbar from "./components/navBar"
import Home from "./pages/home"
import Team from "./pages/team"
import Services from "./pages/services"
import NotFound from "./pages/notFound"


function App() {
  return (
    <Router history={history}>
      <div className="App">
          <Navbar />
        <Switch>
          <Route path="/team" exact component={Team} />
          <Route path="/services" exact component={Services} />
          <Route path="/" exact component={Home} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
