import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Router, Switch, Route } from "react-router-dom";

import history from "./components/mobile/history";
import Navbar from "./components/mobile/navBar";
import Home from "./pages/mobile/home";
import Testimonials from "./pages/mobile/testimonials";
import Team from "./pages/mobile/team";
import NotFound from "./pages/mobile/notFound";

import NavbarDesktop from "../src/components/desktop/navBarDesktop";
import HomeDesktop from "./pages/desktop/homeDesktop";
import Services from "../src/pages/desktop/services";

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
        {/* <NavbarDesktop /> NAVBAR NOW IN HOME PAGE */}
        <Switch>
          <Route path="/team" exact component={Team} />
          <Route path="/testimonials" exact component={Testimonials} />
          <Route path="/services" exact component={Services} />
          <Route path="/" exact component={HomeDesktop} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
