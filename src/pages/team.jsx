import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TeamContent from "../components/team/teamContent";
import Footer from "../components/footer";
import image4 from "../images/4.jpg";

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
      <img width="100%" src={image4} alt="Team" />
      <div style={{ margin:"0px", color: "white", background: "#00AEEF" }}>
        <TeamContent />
        <Footer />
      </div>
    </div>
  );
}
