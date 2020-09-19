import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import "../../App.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    paddingTop: "20px",
    backgroundColor: "#73d3e1",
  },
});

export default function Testimonials() {
  const classes = useStyles();

  // Margin for images
  // Margin for people

  return (
    <div className={classes.root}>
      <div className="contactContainerMobile">
        <div className="contactUsMobile">
          <hr className="hrContactUsMobile"></hr>

          <div style={{ fontSize: "25px ", marginTop: "40px" }}>
            <span style={{ fontWeight: "500" }}>Contact</span>
            <span style={{ fontWeight: "300" }}> Us </span>
          </div>
          <div
            style={{ fontSize: "18px", marginTop: "60px", fontWeight: "300" }}
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
              marginTop: "25px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: "500",
              width: "100%",
            }}
          >
            Contacts@Chungandassociates.com
          </Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#73d3e1",
          width: "100%",
          paddingTop: "80px",
          paddingBottom: "30px",
          position: "relative",
          textAlign: "center",
          fontSize: "11px ",
          fontWeight: "300",
        }}
      >
        MMXX Chung and Associates. All rights reserved.{" "}
      </div>
    </div>
  );
}
