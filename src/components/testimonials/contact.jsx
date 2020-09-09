import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Contact() {
  return (
    <div style={{ textAlign: "center", marginBottom: "75px" }}>
      <Typography style={{ fontSize: "14px" }}>
        For more information please
      </Typography>
      <Typography style={{ fontSize: "14px", marginBottom: "50px" }}>
        feel free to contact us.
      </Typography>
      <Button
        href="mailto: Contacts@Chungandassociates.com"
        variant="outlined"
        style={{
          color: "white",
          borderColor: "white",
          borderRadius: 1,
          textTransform: "none",
          fontSize: "17px",
          fontWeight: "500",
        }}
      >
        Contacts@Chungandassociates.com
      </Button>
    </div>
  );
}
