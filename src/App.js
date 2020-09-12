import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./components/history";
import Navbar from "./components/navBar";
import Home from "./pages/mobile/home";
import Team from "./pages/mobile/team";
import Testamonials from "./pages/mobile/testamonials";
import { makeStyles } from "@material-ui/core/styles";

import NotFound from "./pages/mobile/notFound";


const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },

});

function App() {
  const classes = useStyles();

  return (
    <Router history={history}>
      <div className={classes.root}>
        <Navbar/>
        <Switch>
          <Route path="/team" exact component={Team} />
          <Route path="/testamonials" exact component={Testamonials} />
          <Route path="/" exact component={Home} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
