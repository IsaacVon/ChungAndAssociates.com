import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function PrestonW() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
        It’s hard to put into words all that Liennette’s partnership has done
        for us. Every critical business decision was put through the “Liennette
        Lens” because we know she will see us through to success. DOCUmation’s
        family approach runs through the lineage of our relationship with
        Liennette. She protects our family unit and has become a trusted and
        faithful advisor. Liennette’s work ethic and standards fall deeply in
        line with those of DOCUmation. We feel her passion and true desire to
        serve our family’s interest which is a foundation that DOCUmation
        strives for every day to do the same for our customers. Liennette is a
        successful businesswoman with a proven track record in corporate,
        start-ups, investment funds and asset portfolios. When she started
        NextGen, we knew we needed the mentorship from Liennette on our side.
        Her collaboration and insight will be crucial fundamentals we can pass
        to this generation of young executives. We owe a lot of thanks to
        Liennette for the years of extraordinary service.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Preston Woolfolk & Hunter Woolfolk Co-President / DOCUmation Inc.{" "}
      </Typography>
    </div>
  );
}
