import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function JimP() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
        Having worked with Liennette Chung for more than ten years in a virtual
        CFO role, she has been an incredible resource in coaching our Leadership
        Team as we implemented various strategic initiatives to grow our
        business. Her guidance has helped Fraser Advanced Information Systems
        continue our growth trajectory, with 10% growth increases each year. Ms.
        Chung is a strategic thinker who is passionate about the businesses she
        works with and creative in providing innovative ideas that help to grow
        businesses. Her experiences with PwC, in Investment Banking, as a CFO
        for Xerox retail, and CEO and President of another dealership, Ms.
        Chung’s resume is an impressive one. Her attention to detail,
        professional approach to helping businesses and wealth of knowledge make
        her an ideal partner as a consultant and virtual CFO.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Jim Pierce COO / Fraser AIS, Inc.{" "}
      </Typography>
    </div>
  );
}
