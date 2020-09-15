import React from "react";
import Button from "@material-ui/core/Button";
import "../../App.css";

export default function Footer() {
  return (
    <div className="desktopFooter">
      <div style={{ fontSize: "14px" }}>
        For more information, please contact us.
      </div>

      <div style={{ fontSize: "13px ", fontWeight: "300" }}>
        <span
          style={{
            fontSize: "22px",
            fontWeight: "500",
            lineHeight: "29px",
          }}
        >
          Chung & Associates, LLC
        </span>
        <span
          style={{
            fontSize: "22px",
            fontWeight: "300",
            lineHeight: "29px",
          }}
        >
          {" "}
          | 243 Newport Ave, Long beach CA 90803{" "}
        </span>
      </div>
      <Button
        href="mailto: Contacts@Chungandassociates.com"
        variant="outlined"
        style={{
          color: "black",
          borderColor: "black",
          borderRadius: 10,
          textTransform: "none",
          fontSize: "17px",
          fontWeight: "500",
        }}
      >
        Contacts@Chungandassociates.com
      </Button>
      <div style={{ fontSize: "11px ", fontWeight: "300", marginTop: "40px" }}>
        MMXX Chung and Associates, LLC. All rights reserved.{" "}
      </div>
    </div>
  );
}
