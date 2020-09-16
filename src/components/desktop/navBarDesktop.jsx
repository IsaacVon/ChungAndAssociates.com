import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavDropdown from "./navDropdownDesktop";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    float: "right",
    marginTop: "20px",
    marginRight: "20px",
  },
  expanded: {
    flexGrow: 1,
    backgroundColor: "#F0FEFF",
    width: "200px",
    float: "right",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const path = window.location.pathname;
  const [navbarExpanded, toggleNavbar] = useState(true);


  const navBackgroundExpanded = () => {
    if (path === "/testimonials") return "navBackgroundTestimonialsExpanded";
    if (path === "/team") return "navBackgroundTeamExpanded";
    if (path === "/") return "navBackgroundHomeExpanded";
  };

  const navExpander = () => {
    if (navbarExpanded) toggleNavbar(false);
    if (!navbarExpanded) toggleNavbar(true);
  };

  if (navbarExpanded)
    return (
      <>
        <div className="desktopNavBackground">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => navExpander()}
          >
            <MenuIcon fontSize="large" style={{ transform: "rotate(90deg)" }} />
          </IconButton>
          <NavDropdown navExpander={navExpander} />
        </div>
      </>
    );
  if (!navbarExpanded)
    return (
      <>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => navExpander()}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </>
    );
}
