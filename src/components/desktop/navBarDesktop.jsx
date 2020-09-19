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
    disableFocusRipple: "true",
    "&:hover": {
      color: "#006666",
      backgroundColor: "transparent"
    }
  },
  expanded: {
    flexGrow: 1,
    backgroundColor: "#003366",
    width: "200px",
    float: "right",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const path = window.location.pathname;
  const [navbarExpanded, toggleNavbar] = useState(false);

  const navBackgroundExpanded = () => {
    if (path === "/services") return "navBackgroundContactExpandedDesktop";
    if (path === "/gallery") return "navBackgroundContactExpandedDesktop";
    if (path === "/testimonials") return "navBackgroundContactExpandedDesktop";
    if (path === "/team") return "navBackgroundContactExpandedDesktop";
    if (path === "/contact") return "navBackgroundContactExpandedDesktop";
    if (path === "/chungandassociates/") return "desktopNavBackground";
    if (path === "/") return "desktopNavBackground";
  };

  const navExpander = () => {
    if (navbarExpanded) toggleNavbar(false);
    if (!navbarExpanded) toggleNavbar(true);
  };
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

  if (navbarExpanded)
    return (
      <>
        <div className={navBackgroundExpanded()}>
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
}
