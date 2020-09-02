import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function JohnL() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
        We’ve been working with Liennette Chung for the past 7 years. The first
        time Liennette Chung said to me that numbers are a language, I just
        brushed it off as CPA talk. Later I would find out she had a special
        knack for uncovering every businesses processes, operating strengths and
        issues down to the most granular level though numbers. She’s skilled at
        uncovering people’s tendencies or habits and how these can translate to
        their roles in business and operations. She has uncovered more
        opportunities within our company to improve performance, efficiencies
        and bottom-line profit better than anyone I’ve ever met. In addition to
        that she is visionary, see the big picture and is able to communicate
        that to everyone in terms they understand. Liennette is a great read on
        people. Most key roles within our organization are hired in
        collaboration with Liennette. She’s a great communicator and can
        instantly gain acceptance with your team. She is an extremely talented
        consultant and I consider Liennette a member of our executive team and
        family.
      </Typography>
      <Typography variant="h4" gutterBottom>
        John Lowery President & Owner / Applied Imaging, Inc.{" "}
      </Typography>
    </div>
  );
}
