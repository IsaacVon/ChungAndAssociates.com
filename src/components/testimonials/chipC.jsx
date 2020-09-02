import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function ChipC() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
        Liennette has been on a long-term professional relationship with RJ
        Young since 2014. She was first brought in to clarify some business
        uneasiness that we had and soon uncover all the business issues that we
        felt but couldn’t quite put our fingers on. Numbers are a language to
        Liennette and she has the ability to draw from them and understand the
        business in a much more deep and insightful manner than just profit and
        loss. Further, she understands people, processes, business and
        economies. I appreciate Liennette’s side counsel over the years and have
        her in my side pocket in most of our critical business decisions. She
        has certainly proven herself with the start-up of Pacific ConnecTeq, a
        Ricoh dealer and IT business, on her own and subsequently sold it at the
        precision of timing only a keen investment banker can execute to. I
        consider Liennette a member of our leadership team and a friend.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Chip Crunk President & CEO / RJ YOUNG
      </Typography>
    </div>
  );
}
