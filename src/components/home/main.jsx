import React from "react";
import Typography from "@material-ui/core/Typography";
import ImageCard from "../imageCard";
import logo from "../../logos/chung-logo.svg";

export default function Main() {
  return (
    <>
      <ImageCard
        title="Liennette"
        height="100vw"
        image={require("../../images/1.jpg")}
      />
      <img src={logo} alt="Logo"/>

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
