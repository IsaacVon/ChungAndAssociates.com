import React from "react";
import Typography from "@material-ui/core/Typography";
import image3 from "../../images/3.jpg";

export default function Services() {
  return (
    <>
      <img width="100%" src={image3} alt="Office" />

      <Typography variant="h6">Services We Offer.</Typography>
      <Typography variant="body1">
        • Performance Assessment • Business Planning & Oversight • Financial
        Modeling & Benchmark Development • Financial Statement Compilation &
        Review • Organization Structure, Process Design & Implementation •
        Operations & Controls Assessment & Attestation • Acquisition Review &
        Valuation • Due Diligence for Acquisition • Mergers Implementation &
        Business Consolidation • Resource & Human Capital Alignment • Leadership
        Coaching & Development • Next Generation Development • Succession
        Planning • Professional Outsourcing & Support
      </Typography>
    </>
  );
}
