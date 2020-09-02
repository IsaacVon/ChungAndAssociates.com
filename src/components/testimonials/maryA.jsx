import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function MaryA() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
        To compare Liennette to others at her professional level is to compare
        an Olympic athlete to a collegiate player in sports. She develops a
        vision of the goal. then develops and executes a successful gameplan.She
        is able to achieve her goals in a manner that is quicker, more focused,
        and more insightful.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Mary Ann Harrison Ex-Partner / PricewaterhouseCoopers (PwC){" "}
      </Typography>
    </div>
  );
}
