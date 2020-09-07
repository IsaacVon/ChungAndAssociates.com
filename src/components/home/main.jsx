import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../../logos/chung-logo.svg";
import image1 from "../../images/1.jpg";

export default function Main() {
  return (
    <>
      <img width="100%" src={image1} alt="Liennette" />
      <img width="100%" src={logo} alt="Logo" />

      <Typography variant="h6" gutterBottom>
        Building Quality Organizations.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Chung and Associates is dedicated to building quality organizations. We
        assist our clients in strategic planning, financial oversight, and
        capital selection to continuously realize the next stage of their
        vision.
      </Typography>
      <Typography variant="caption" gutterBottom>
        MMXX Chung and Associates, LLC. All rights reserved.{" "}
      </Typography>
    </>
  );
}
