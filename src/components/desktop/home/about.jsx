import React from "react";
import Grid from "@material-ui/core/Grid";

export default function About() {
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "38px" }}>
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
      </div>
      <Grid container>
        <Grid item xs={6}>
          <div
            style={{
              width: "500px",
              textAlign: "right",
              margin: "25px",
              marginTop: "20px",
              fontSize: "54px",
              marginBottom: "28px",
              color: "#73D3E1",
            }}
          >
            We work with entrepreneurs to mobilize their resources and bring out
            the full potential of their businesses.
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              lineHeight: "215%",
              margin: "28px",
              fontWeight: "300",
              fontSize: "18px",
            }}
          >
            <p>
              The core of our services revolves around business planning with a
              focus in the technology and office solutions industry. Whether the
              mission is to advance the Company’s growth or enhance its
              performance, venture into new market territories or expand into
              new product lines, Chung and Associates assists in the preparation
              and execution to make it happen.
            </p>
            <p>
              {" "}
              We facilitate toward building a solid leadership team and
              operating infrastructure to continuously scale the organization
              towards growth and profit.{" "}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
