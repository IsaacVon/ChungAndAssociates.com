import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import logo from "../../logos/chung-logo.svg";
import { NavHashLink as NavLink } from "react-router-hash-link";

import "../../App.css";
import Testimonials from "../../pages/mobile/testimonials";

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

  let path = window.location.pathname;
  let hash = window.location.hash;

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbarDropdown">
      <Button
        disableTouchRipple
        className={hash === "#services" ? classes.selected : classes.standard}
        component={NavLink}
        to={"/#services"}
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
        onClick={() => navExpander()}
      >
        <span className="light">OUR</span>
        <span className="bold"> SERVICES </span>
      </Button>

      <Button
        disableTouchRipple
        className={hash === "#aboutUs" ? classes.selected : classes.standard}
        component={NavLink}
        // smooth
        to={"/#aboutUs"}
        scroll={(el) => scrollWithOffset(el, 140)}
        onClick={() => navExpander()}
      >
        {" "}
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
          hash
            ? classes.standard
            : path === "/testimonials"
            ? classes.selected
            : classes.standard
        }
      >
        <span className="light">PEOPLE</span>
        <span className="bold"> SAY </span>
      </Button>
      <Button
        disableTouchRipple
        className={path === "/contact" ? classes.selected : classes.standard}
        component={Link}
        to={"/contact"}
        onClick={() => navExpander()}
      >
        {" "}
        <span className="light">EVENT </span>
        <span className="bold"> GALLERY </span>
      </Button>
      <Button
        disableTouchRipple
        className={path === "/contact" ? classes.selected : classes.standard}
        component={Link}
        to={"/contact"}
        onClick={() => navExpander()}
      >
        {" "}
        <span className="light">CONTACT </span>
        <span className="bold"> US </span>
      </Button>
      <div className="dropDownLogo">
        <a href="/">
          <img className="logo1" src={logo} alt="Logo" />
        </a>
        <div className="tagLine">Building Quality Organizations</div>
      </div>
    </div>
  );
}
