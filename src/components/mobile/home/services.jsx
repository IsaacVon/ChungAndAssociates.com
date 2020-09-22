import React from "react";
import image3 from "../../../images/3.jpg";

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
        {/* <Parallax y={[-80, 0]}> */}
        <img
          style={{ margin: "-10px 83px 0px -83px" }}
          width="145%"
          src={image3}
          alt="Office"
        />
        {/* </Parallax> */}
      </div>

      <div style={{ textAlign: "center", marginTop: "25px" }}>
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
      </div>

      <div>
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
          <li>• Financial Performance Assessment</li>
          <li>• Organization Evaluation</li>
          <li>• Business Planning and Oversight</li>
          <li>• Financial Modeling and Benchmark Development</li>
          <li>• Financial Statement Compilation and Review</li>
          <li>• Organization Structure & Process Design and Implementation</li>
          <li>• Operations & Controls Assessment and Attestation</li>
          <li>• Business Valuation</li>
          <li>• Business Preparation for Acquisition</li>
          <li>• Due Diligence and Special Attestation</li>
          <li>• Mergers Implementation & Business Consolidation</li>
          <li>• Resource and Human Capital Alignment</li>
          <li>• Leadership Coaching & Development</li>
          <li>• Professional Outsourcing and Support</li>
          <li>• Succession Planning</li>
          <li>• Next Generation Coaching & Development</li>
        </ul>
      </div>
    </>
  );
}
