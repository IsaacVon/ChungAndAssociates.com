import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        IMAGE 3
      </Typography>{" "}
      <Typography variant="h6" gutterBottom>
      Services We Offer.
      </Typography>
      <Typography variant="body1" gutterBottom>
      • Performance Assessment • Business Planning & Oversight • Financial Modeling & Benchmark Development • Financial Statement Compilation & Review • Organization Structure, Process Design & Implementation • Operations & Controls Assessment & Attestation • Acquisition Review & Valuation • Due Diligence for Acquisition • Mergers Implementation & Business Consolidation • Resource & Human Capital Alignment • Leadership Coaching & Development • Next Generation Development • Succession Planning • Professional Outsourcing & Support
      </Typography>
    </div>
  );
}
