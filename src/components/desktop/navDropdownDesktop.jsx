import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavHashLink as NavLink } from "react-router-hash-link";

import "../../App.css";

const useStyles = makeStyles((theme) => ({
  selected: {
    fontSize: "15px",
    width: "100%",
    lineHeight: "2.5",
    padding: "10px 0px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  selectedServices: {
    fontSize: "15px",
    width: "100%",
    lineHeight: "2.5",
    padding: "10px 0px",
    backgroundColor: "rgb(142, 142, 149, 0.3)",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  standard: {
    fontSize: "15px",
    width: "100%",
    lineHeight: "2.5",
    padding: "10px 0px",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
  },
}));

export default function NavDropdown({ navExpander }) {
  const classes = useStyles();

  const path = window.location.pathname;
  let hash = window.location.hash;

  return (
    <>
      <div className="desktopNavDropdown">
        <Button
          disableTouchRipple
          component={Link}
          to={"/services"}
          onClick={() => navExpander()}
          className={
            path === "/services" ? classes.selectedServices : classes.standard
          }
        >
          <span className="light">OUR</span>
          <span className="bold"> SERVICES </span>
        </Button>
        <Button
          disableTouchRipple
          className={hash === "#aboutUs" ? classes.selected : classes.standard}
          component={NavLink}
          smooth
          to={"/#aboutUs"}
        >
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
          to="/testimonials"
          onClick={() => navExpander()}
          className={
            path === "/testimonials" ? classes.selected : classes.standard
          }
        >
          <span className="light">PEOPLE</span>
          <span className="bold"> SAY </span>
        </Button>
        {/* New page */}
        {/* <Button
          disableTouchRipple
          className={path === "/gallery" ? classes.selected : classes.standard}
          component={Link}
          to={"/gallery"}
        >
          {" "}
          <span className="light">EVENT </span>
          <span className="bold"> GALLERY </span>
        </Button> */}
        <Button
          disableTouchRipple
          className={path === "/contact" ? classes.selected : classes.standard}
          component={Link}
          to={"/contact"}
        >
          {" "}
          <span className="light">CONTACT </span>
          <span className="bold"> US </span>
        </Button>
      </div>
    </>
  );
}
