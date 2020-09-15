import React from "react";
import Button from "@material-ui/core/Button";
import "../../App.css";

const path = window.location.pathname;

const footerStyle = () => {
  if (path === "/testamonials") return "desktopFooterBlue";
  if (path === "/team") return "desktopFooterBlue";
  if (path === "/services") return "desktopFooterWhite";
  if (path === "/gallery") return "desktopFooterBlue";
  if (path === "/") return "desktopFooterBlue";
};

export default function Footer() {
  console.log("path", path)

  return (
    <div className={footerStyle()}>
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
