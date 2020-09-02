import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function JanetL() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" gutterBottom>
        Liennette understands the imaging business and is successfully guiding
        us through the chaos of growth. She has given us the necessary tools to
        propel our business to the next level! She is sharp, direct, and pushes
        us forward.
      </Typography>
      <Typography variant="h4" gutterBottom>
      Janet Langarek VP of Operations / Applied Imaging, Inc.      </Typography>
    </div>
  );
}
