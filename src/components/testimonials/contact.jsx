import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Background Image 9</h1>
      <Typography variant="body1" gutterBottom>
        For more information please feel free to contact us.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Contacts@Chungandassociates.com{" "}
      </Typography>
    </div>
  );
}
