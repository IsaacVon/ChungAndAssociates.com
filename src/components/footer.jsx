import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
      Chung & Associates, LLC 243 Newport Ave. | Long beach CA 90803
      </Typography> 
      <Typography variant="caption" gutterBottom>
        MMXX Chung and Associates, LLC. All rights reserved.{" "}
      </Typography>
    </div>
  );
}
