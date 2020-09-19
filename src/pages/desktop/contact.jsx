import React from "react";
import NavBar from "../../components/desktop/navBarDesktop";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import logo from "../../logos/chung-logo.svg";

import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <>
      <div className="navbarPositioner">
        <NavBar />
      </div>
      <div className="contactContainer">
        <div className="contactUsDesktop">
          <div className="serviceLogoContainer">
            <a href="/">
              <img className="logo2" src={logo} alt="Logo" />
            </a>
            <div className="tagLineDesktop">
              Building Quality Organizations.
            </div>
          </div>

          <hr className="hrContactUs"></hr>

          <div style={{ fontSize: "30px ", marginTop: "45px" }}>
            <span style={{ fontWeight: "500" }}>Contact</span>
            <span style={{ fontWeight: "300" }}> Us </span>
          </div>
          <div
            style={{ fontSize: "18px", marginTop: "45px", fontWeight: "300" }}
          >
            We would love to hear from you!
          </div>
          <Button
            href="mailto: Contacts@Chungandassociates.com"
            variant="outlined"
            style={{
              color: "black",
              borderColor: "white",
              borderRadius: 10,
              marginTop: "15px",
              textTransform: "none",
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            Contacts@Chungandassociates.com
          </Button>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "11px ",
            fontWeight: "300",
            marginTop: "80px",
            marginBottom: "10px",
          }}
        >
          MMXX Chung and Associates, LLC. All rights reserved.{" "}
        </div>
      </div>
    </>
  );
}
