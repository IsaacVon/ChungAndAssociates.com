import React from "react";
import Typography from "@material-ui/core/Typography";
import ImageCard from "../imageCard";


export default function Main() {

  return (
    <>
      {/* Set this card to background, with the logo  */}
      <ImageCard
        title="office"
        height="600px"
        image={require("../../images/1.jpg")}
      />
      <Typography variant="h3" gutterBottom>
        LOGO
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
