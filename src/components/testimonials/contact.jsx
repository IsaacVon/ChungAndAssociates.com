import React from "react";
import Typography from "@material-ui/core/Typography";
import ImageCard from "../imageCard";

export default function Contact() {
  return (
    <>
      <ImageCard
        title="desert"
        height="252px"
        image={require("../../images/9.jpg")}
      />
      <Typography variant="body1" gutterBottom>
        For more information please feel free to contact us.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Contacts@Chungandassociates.com{" "}
      </Typography>
    </>
  );
}
