import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./components/mobile/history";
import Navbar from "./components/mobile/navBar";
import NavbarDesktop from "../src/components/desktop/navBarDesktop"
import Home from "./pages/mobile/home";
import Team from "./pages/mobile/team";
import Testamonials from "./pages/mobile/testamonials";
import { makeStyles } from "@material-ui/core/styles";

import HomeDesktop from "./pages/desktop/homeDesktop";

import NotFound from "./pages/mobile/notFound";


const useStyles = makeStyles({
  root: {
    width: "100%",
  },

});

function App() {
  const classes = useStyles();

  return (
    <Router history={history}>
      <div className={classes.root}>
        {/* <Navbar/> */}
        <NavbarDesktop />
        <Switch>
          <Route path="/team" exact component={Team} />
          <Route path="/testamonials" exact component={Testamonials} />
          <Route path="/" exact component={HomeDesktop} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
