import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        IMAGE 1
      </Typography>{" "}
      <Typography variant="h3" gutterBottom>
        LOGO
      </Typography>
      <Typography variant="body1" gutterBottom>
        Chung and Associates is dedicated to building quality organizations. We
        assist our clients in strategic planning, financial oversight, and
        capital selection to continuously realize the next stage of their
        vision.
      </Typography>
      <Typography variant="caption" gutterBottom>
        MMXX Chung and Associates, LLC. All rights reserved.{" "}
      </Typography>
    </div>
  );
}
