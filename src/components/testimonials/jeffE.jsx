import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function JeffE() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
        I have had the pleasure of working with Liennette for several years on
        multiple projects and my expectations have always been exceeded. Her
        timeliness, attention to detail and genuine concern for providing ROI
        are always front and center. However, it’s her knowledge of the industry
        and sincere care for people that set her apart.
      </Typography>
      <Typography variant="h4" gutterBottom>
      Jeff Elkin President & Owner / Advance Business Systems
      </Typography>
    </div>
  );
}
