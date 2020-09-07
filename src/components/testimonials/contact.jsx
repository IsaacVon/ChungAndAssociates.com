import React from "react";
import Typography from "@material-ui/core/Typography";
import image9 from "../../images/9.jpg";

export default function Contact() {
  return (
    <>
      <img width="100%" src={image9} alt="desert" />

      <Typography variant="body1" gutterBottom>
        For more information please feel free to contact us.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Contacts@Chungandassociates.com{" "}
      </Typography>
    </>
  );
}
