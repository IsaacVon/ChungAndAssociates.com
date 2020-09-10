import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import NavDropdown from "./navDropdown";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();


  const path = window.location.pathname;
  const [navbarExpanded, toggleNavbar] = useState(false);

  
  
  
  const decideNavColor = () => {
    if (path === "/testamonials") return "testamonials";
    if (path === "/team") return "rgba(255, 255, 255, 0.5)"; // white transparent
    if (path === "/") return "#73D3E1";
  };

  const navColor = decideNavColor();

  const navExpander = () => {
    console.log("navExpander");
    if (navbarExpanded) toggleNavbar(false);
    if (!navbarExpanded) toggleNavbar(true);
  };


  if (navbarExpanded)
    return (
      <div
        style={{
          flexGrow: 1,
          backgroundColor: navColor,
        }}
      >
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
      </div>
    );
  if (!navbarExpanded)
    return (
      <div
        style={{
          flexGrow: 1,
          backgroundColor: navColor,
        }}
      >
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
      </div>
    );
}
