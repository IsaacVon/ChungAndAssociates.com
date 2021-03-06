import React from "react";
import Typography from "@material-ui/core/Typography";
import "../../../App.css";

export default function Main() {
  return (
    <>
      <div style={{ paddingBottom: "25px" }}>
        <Typography
          style={{
            fontSize: "15px",
            margin: "24px",
            marginTop: "0px",
            textAlign: "justify",
          }}
        >
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
      </div>
    </>
  );
}
