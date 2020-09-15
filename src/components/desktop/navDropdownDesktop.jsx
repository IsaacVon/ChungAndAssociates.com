import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import logo from "../../logos/chung-logo.svg";
import { HashLink } from 'react-router-hash-link';


import "../../App.css";

const useStyles = makeStyles((theme) => ({
  selected: {
    fontSize: "15px",
    width: "100%",
    backgroundColor: "white",
    color: "#73D3E1",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  standard: {
    fontSize: "15px",
    width: "100%",
    backgroundColor: "#F0FEFF",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
}));

export default function NavDropdown({ navExpander }) {
  const classes = useStyles();

  const path = window.location.pathname;

  return (
    <div className="navbarDropdown">
      <Button
        disableTouchRipple
        component={Link}
        to="/"
        onClick={() => navExpander()}
        className={path === "/" ? classes.selected : classes.standard}
      >
        <span className="light">HOME</span>
        <span className="bold"> ADD TO LOGO </span>
      </Button>
      <Button
        disableTouchRipple
        as={HashLink}
        to={`${path}#services`}
        onClick={() => navExpander()}
        className={path === "/" ? classes.selected : classes.standard}
      >
        <span className="light">OUR</span>
        <span className="bold"> SERVICES </span>
      </Button>
      {/* add anchor point */}
      <Button disableTouchRipple className={classes.standard}>
        <span className="light">ABOUT</span>
        <span className="bold"> US </span>
      </Button>
      <Button
        disableTouchRipple
        component={Link}
        to="/team"
        onClick={() => navExpander()}
        className={path === "/team" ? classes.selected : classes.standard}
      >
        <span className="light">THE</span>
        <span className="bold"> TEAM </span>
      </Button>
      <Button
        disableTouchRipple
        component={Link}
        to="/testamonials"
        onClick={() => navExpander()}
        className={
          path === "/testamonials" ? classes.selected : classes.standard
        }
      >
        <span className="light">PEOPLE</span>
        <span className="bold"> SAY </span>
      </Button>
      {/* New page */}
      <Button disableTouchRipple className={classes.standard}>
        <span className="light">CONTACT </span>
        <span className="bold"> US </span>
      </Button>
      <div className="dropDownLogo">
        <img className="logo1" src={logo} alt="Logo" />
        <div className="tagLine">Building Quality Organizations.</div>
      </div>
    </div>
  );
}
