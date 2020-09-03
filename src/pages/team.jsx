import React from "react";
import ImageCard from "../components/imageCard";
import { makeStyles } from "@material-ui/core/styles";
import TeamContent from "../components/team/teamContent";
import Footer from "../components/footer";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* background image */}
      <ImageCard
        title="image 4"
        height="252px"
        image={require("../images/3.jpg")}
      />

      <TeamContent />
      <Footer />
    </div>
  );
}
