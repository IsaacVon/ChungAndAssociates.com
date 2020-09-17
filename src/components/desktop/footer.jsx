import React from "react";
import Button from "@material-ui/core/Button";
import "../../App.css";

const path = window.location.pathname;

const footerStyle = () => {
  // For github
  if (path === "/chungandassociates") return "desktopFooterBlue";
  if (path === "/*") return "desktopFooterWhite";


  if (path === "/testimonials") return "desktopFooterBlue";
  if (path === "/TestimonialsDesktop") return "desktopFooterBlue";
  if (path === "/team") return "desktopFooterBlue";
  if (path === "/services") return "desktopFooterWhite";
  if (path === "/gallery") return "desktopFooterBlue";
  if (path === "/") return "desktopFooterBlue";
};

export default function Footer() {

  return (
    // <div className={footerStyle()}>
    <div className="desktopFooterBlue">
      <div style={{ fontSize: "18px", marginTop: "50px", fontWeight: "300" }}>
        For more information, please contact us.
      </div>

      <div style={{ fontSize: "20px ", marginTop: "50px" }}>
        <span style={{ fontWeight: "500" }}>Chung & Associates, LLC</span>
        <span style={{ fontWeight: "300" }}>
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
          marginTop: "15px",
          textTransform: "none",
          fontSize: "17px",
          fontWeight: "500",
        }}
      >
        Contacts@Chungandassociates.com
      </Button>
      <div style={{ fontSize: "11px ", fontWeight: "300", marginTop: "80px", marginBottom: "10px" }}>
        MMXX Chung and Associates, LLC. All rights reserved.{" "}
      </div>
    </div>
  );
}
