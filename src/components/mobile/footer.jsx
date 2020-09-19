import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <div style={{ textAlign: "center", paddingBottom: "28px", paddingTop: "20px" }}>
      <Typography style={{ fontSize: "19px ", fontWeight: "600" }}>
        Chung & Associates, LLC
      </Typography>{" "}
      <Typography style={{ fontSize: "13px ", fontWeight: "300" }}>
        243 Newport Ave. | Long beach CA 90803
      </Typography>
      <Typography
        style={{ fontSize: "11px ", fontWeight: "300", marginTop: "18px" }}
      >
        MMXX Chung and Associates, LLC. All rights reserved.{" "}
      </Typography>
    </div>
  );
}
