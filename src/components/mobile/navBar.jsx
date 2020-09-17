import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import "../../App.css";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavDropdown from "./navDropdown";
import logo from "../../logos/chung-logo.svg";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginTop: "1px",
    marginLeft: "7px",
    outerHeight: "300px",
    padding: "0px",
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

  const navOpacity = () => {
    if (path === "/team") return "navbarContainerTeam";
    if (path === "/testimonials") return "navbarContainerTestimonials";
    if (path === "/") return "navbarContainerHome";
    if (path === "/chungandassociates/") return "navbarContainerHome";
  };

  const navBackgroundCollapsed = () => {
    if (path === "/testamonials") return "navBackgroundTestamonialsCollapsed";
    if (path === "/team") return "navBackgroundTeamCollapsed";
    if (path === "/") return "navBackgroundHomeCollapsed";
    if (path === "/chungandassociates/") return "navBackgroundHomeCollapsed";
    if (path === "/*") return "navBackgroundHomeCollapsed";
  };

  console.log("path for navbar home", path)
  const navBackgroundExpanded = () => {
    if (path === "/testamonials") return "navBackgroundTestamonialsExpanded";
    if (path === "/team") return "navBackgroundTeamExpanded";
    if (path === "/") return "navBackgroundHomeExpanded";
    if (path === "/chungandassociates/") return "navBackgroundHomeExpanded";
    if (path === "/*") return "navBackgroundHomeExpanded";
  };

  const navExpander = () => {
    if (navbarExpanded) toggleNavbar(false);
    if (!navbarExpanded) toggleNavbar(true);
  };

  if (navbarExpanded)
    return (
      <>
        <div className={classes.expanded}>
          <div className={"navbarContainer2"}>
            <Grid container>
              <Grid item xs={1}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={() => navExpander()}
                >
                  <MenuIcon
                    style={{ transform: "rotate(90deg)" }}
                    fontSize="large"
                  />
                </IconButton>
              </Grid>
            </Grid>
          </div>

          <NavDropdown navExpander={navExpander} />
          <div className={navBackgroundExpanded()}></div>
        </div>
      </>
    );
  if (!navbarExpanded)
    return (
      <>
        <div className={navBackgroundCollapsed()}>
          <div className={navOpacity()}>
            <Grid container>
              <Grid item xs={1}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={() => navExpander()}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={11}>
                <a href="/">
                  <img className="logo1" src={logo} alt="Logo" />
                </a>
              </Grid>
            </Grid>
            <div className="tagLine">Building Quality Organizations.</div>
          </div>
        </div>
      </>
    );
}
