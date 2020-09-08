import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../../logos/chung-logo.svg";
import image1 from "../../images/1.jpg";

export default function Main() {
  return (
    <>
      <img width="100%" src={image1} alt="Liennette" />
      <img style={{ margin: "0px 20px 10px 20px" }} src={logo} alt="Logo" />
      <div style={{ paddingBottom: "25px" }}>
        <Typography
          style={{ textAlign: "center", fontSize: "17px ", fontWeight: "300" }}
        >
          Building Quality Organizations.
        </Typography>
        <Typography style={{ fontSize: "15px", margin: "24px", marginTop:"35px" }}>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Chung and Associates is dedicated to building quality organizations.{" "}
          </span>
          <span
            style={{
              fontWeight: "300",
            }}
          >
            We assist our clients in strategic planning, financial oversight,
            and capital selection to continuously realize the next stage of
            their vision.
          </span>
        </Typography>
        <Typography
          style={{
            fontSize: "11px ",
            fontWeight: "300",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          MMXX Chung and Associates, LLC. All rights reserved.{" "}
        </Typography>
      </div>
    </>
  );
}
