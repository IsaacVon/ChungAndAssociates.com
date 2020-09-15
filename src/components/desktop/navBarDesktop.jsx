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
    else return "navbarContainer";
  };

  const navBackgroundCollapsed = () => {
    if (path === "/testamonials") return "navBackgroundTestamonialsCollapsed";
    if (path === "/team") return "navBackgroundTeamCollapsed";
    if (path === "/") return "navBackgroundHomeCollapsed";
  };

  const navBackgroundExpanded = () => {
    if (path === "/testamonials") return "navBackgroundTestamonialsExpanded";
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
          <div className={"navbarContainer"}>
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
          {/* <div className="navBackgroundHomeExpanded"></div> */}
          {/* <div className="navBackgroundTestamonialsExpanded"></div> */}
          <div className={navBackgroundExpanded()}></div>
        </div>
      </>
    );
  if (!navbarExpanded)
    return (
      <div className="navContentHomeWrapper">

        <div className="navBackgroundHomeDesktop">

          <div className="logoTaglineContainer">
            <img className="logo2" src={logo} alt="Logo" />
            <div className="tagLineDesktop">
              Building Quality Organizations.
            </div>
          </div>
          
        </div>

      </div>
    );
}
