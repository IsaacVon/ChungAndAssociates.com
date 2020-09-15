import React from "react";
import Button from "@material-ui/core/Button";

export default function Contact() {
  
  return (
    <div style={{ textAlign: "center", marginBottom: "58px" }}>
      <div style={{ fontSize: "14px" }}>For more information please</div>
      <div style={{ fontSize: "14px", marginBottom: "55px" }}>
        feel free to contact us.
      </div>
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
