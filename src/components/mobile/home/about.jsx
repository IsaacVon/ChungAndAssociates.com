import React from "react";
import Typography from "@material-ui/core/Typography";
import image2 from "../../../images/2.jpg";

export default function About() {
  return (
    <div>
      <Typography
        style={{ fontSize: "24px", textAlign: "center", marginTop: "38px" }}
      >
        <span
          style={{
            fontWeight: "900",
            lineHeight: "29px",
          }}
        >
          This is Who
        </span>
        <span
          style={{
            fontWeight: "300",
            lineHeight: "29px",
          }}
        >
          {" "}
          We Are
        </span>
      </Typography>
      <Typography
        style={{
          textAlign: "center",
          margin: "25px",
          marginTop: "20px",
          fontSize: "25px",
          marginBottom: "28px",
          paddingBottom: "20px",
        }}
        color="secondary"
      >
        We work with entrepreneurs to mobilize their resources and bring out the
        full potential of their businesses.
      </Typography>
      {/* <div
        style={{
          margin: " 15px 0px 10px 0px",
          overflow: "hidden",
          maxHeight: "90%",
        }}
      >
        <Parallax y={[-40, 0]}>
        <img
          style={{ margin: "-30px 20px 0px -20px" }}
          width="120%"
          src={image2}
          alt="Bamboo"
        />
        </Parallax>
      </div> */}

      <Typography
        style={{
          margin: "28px",
          fontWeight: "300",
          fontSize: "15px",
          textAlign: "justify",
        }}
      >
        The core of our services revolves around business planning with a focus
        in technology and office solutions industry. Whether the mission is
        to advance the Company’s growth or enhance its performance, venture into
        new market territories or expand into new product lines, Chung and
        Associates assists in the preparation and execution to make it happen.
        We facilitate toward building a solid leadership team and operating
        infrastructure to continuously scale the organization towards growth and
        profit.{" "}
      </Typography>
    </div>
  );
}
