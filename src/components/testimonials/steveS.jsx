import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function SteveS() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
        We have worked with Liennette for nearly eight years. She brings
        considerable experience and financial expertise to our business. But
        more importantly, she brings insight and ideas that can only come from
        engaging with a broad cross-section of quality companies in our
        industry. We have had tremendous ROI from her services and continue to
        retain her as a trusted advisor for the long term! Needless to say, I am
        very pleased with Liennette. She’s an integral part of my decision
        making.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Steve Sumner President / Centriworks{" "}
      </Typography>
    </div>
  );
}
