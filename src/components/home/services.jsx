import React from "react";
import Typography from "@material-ui/core/Typography";
import image3 from "../../images/3.jpg";

export default function Services() {
  return (
    <>
      <div
        style={{
          margin: " 15px 0px 10px 0px",
          overflow: "hidden",
          maxHeight: "287px",
        }}
      >
        <img
          style={{ margin: "-10px 83px 0px -83px" }}
          // width="540px"
          width="145%"
          src={image3}
          alt="Office"
        />
      </div>

      <Typography style={{ textAlign: "center", marginTop: "25px" }}>
        <span
          style={{
            fontSize: "25px",
            fontWeight: "900",
            lineHeight: "29px",
          }}
        >
          Services{" "}
        </span>
        <span
          style={{
            fontSize: "25px",
            fontWeight: "300",
            lineHeight: "29px",
          }}
        >
          We Offer.
        </span>
      </Typography>
      <Typography>
        <ul
          style={{
            marginTop: "15px",
            fontSize: "12px",
            lineHeight: "203%",
            paddingInlineStart: "20px",
            marginBottom: "28px",
            listStyle: "none",
          }}
        >
          <li>• Performance Assessment</li>
          <li>• Business Planning & Oversight</li>
          <li>• Financial Modeling & Benchmark Development</li>
          <li>• Financial Statement Compilation & Review</li>
          <li>• Organization Structure, Process Design & Implementation</li>
          <li>• Operations & Controls Assessment & Attestation</li>
          <li>• Acquisition Review & Valuation</li>
          <li>• Due Diligence for Acquisition</li>
          <li>• Mergers Implementation & Business Consolidation</li>
          <li>• Resource & Human Capital Alignment</li>
          <li>• Leadership Coaching & Development</li>
          <li>• Next Generation Development</li>
          <li>• Succession Planning</li>
          <li>• Professional Outsourcing & Support</li>
        </ul>
      </Typography>
    </>
  );
}
