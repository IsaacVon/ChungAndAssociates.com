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
import TeamDesktop from "./pages/desktop/team";
import HomeDesktop from "./pages/desktop/home";
import TestimonialsDesktop from "./pages/desktop/testimonials";
import Services from "../src/pages/desktop/services";
import Gallery from "../src/pages/desktop/gallery";

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
          {/* <Route path="/team" exact component={Team} /> */}
          <Route path="/team" exact component={TeamDesktop} />
          <Route path="/testimonials" exact component={Testimonials} />
          <Route path="/TestimonialsDesktop" exact component={TestimonialsDesktop} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/services" exact component={Services} />
          <Route path="/" exact component={HomeDesktop} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
