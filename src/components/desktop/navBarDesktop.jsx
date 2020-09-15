import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavDropdown from "./navDropdownDesktop";
import logo from "../../logos/chung-logo.svg";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    float: "right",
    marginTop: "10px",
    marginRight: "30px",
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
  const [navbarExpanded, toggleNavbar] = useState(false);

  const navOpacity = () => {
    if (path === "/team") return "navbarContainerTeam";
    else return "navbarContainer";
  };

  const navBackgroundCollapsed = () => {
    if (path === "/testimonials") return "navBackgroundTestimonialsCollapsed";
    if (path === "/team") return "navBackgroundTeamCollapsed";
    if (path === "/") return "navBackgroundHomeCollapsed";
  };

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
        <div className={classes.expanded}>
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
      </>
    );
  if (!navbarExpanded)
    return (
      <>
        <div className={"navbarContainer"}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => navExpander()}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
      </>
    );
}
