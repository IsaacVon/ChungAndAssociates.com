import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <div
      style={{ textAlign: "center", paddingBottom: "28px", paddingTop: "20px" }}
    >
      <Typography style={{ fontSize: "19px ", fontWeight: "600" }}>
        Chung & Associates, LLC
      </Typography>{" "}
      <Typography style={{ fontSize: "13px ", fontWeight: "300" }}>
        3646 Long Beach Blvd Unit 102 Long Beach, CA 90807
      </Typography>
      <Typography
        style={{ fontSize: "11px ", fontWeight: "300", marginTop: "18px" }}
      >
        MMXX Chung and Associates. All rights reserved.{" "}
      </Typography>
    </div>
  );
}
