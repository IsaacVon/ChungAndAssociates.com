import React from "react";
import Typography from "@material-ui/core/Typography";
import image2 from "../../images/2.jpg";

export default function About() {
  return (
    <div>
      <Typography style={{ textAlign: "center", marginTop: "38px" }}>
        <span
          style={{
            fontSize: "25px",
            fontWeight: "900",
            lineHeight: "29px",
          }}
        >
          This is Who
        </span>
        <span
          style={{
            fontSize: "25px",
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
        }}
        color="secondary"
      >
        We work with entrepreneurs to mobilize their resources and bring out the
        full potential of their businesses.
      </Typography>
      <div
        style={{
          margin: " 15px 0px 10px 0px",
          overflow: "hidden",
          maxHeight: "191px",
        }}
      >
        <img
          style={{ margin: "-30px 0px 00px 00px" }}
          width="100%"
          src={image2}
          alt="Bamboo"
        />
      </div>

      <Typography
        style={{ margin: "28px", fontWeight: "300", fontSize: "15px" }}
      >
        The core of our services revolves around business planning with a focus
        in the technology and office solutions industry. Whether the mission is
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
