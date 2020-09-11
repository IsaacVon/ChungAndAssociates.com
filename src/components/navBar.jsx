import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavDropdown from "./navDropdown";
import image1 from "../images/1.jpg";
import logo from "../logos/chung-logo.svg";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  home: {
    flexGrow: 1,
    backgroundColor: "transparent",
    // background
  },
  team: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
  testamonials: {
    flexGrow: 1,
    backgroundColor: "green",
  },
  expanded: {
    flexGrow: 1,
    backgroundColor: "#F0FEFF",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const path = window.location.pathname;
  const [navbarExpanded, toggleNavbar] = useState(false);

  const navClass = () => {
    if (path === "/testamonials") return classes.testamonials;
    if (path === "/team") return classes.team;
    if (path === "/") return classes.home;
  };

  const navExpander = () => {
    console.log("navExpander");
    if (navbarExpanded) toggleNavbar(false);
    if (!navbarExpanded) toggleNavbar(true);
  };

  if (navbarExpanded)
    return (
      <div className={classes.expanded}>
        <AppBar
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => navExpander()}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <NavDropdown navExpander={navExpander} />
        <div className="imgDiv3">
          <img src={image1} alt="Liennette" />
        </div>
      </div>
    );
  if (!navbarExpanded)
    return (
      <div className={navClass()}>
        <div className="navBackground">
          <div className="navContent">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => navExpander()}
            >
              <MenuIcon />
            </IconButton>
            <img className="logo1" src={logo} alt="Logo" />
            <div className="tagLine">Building Quality Organizations.</div>
          </div>
        </div>
      </div>
    );
}
