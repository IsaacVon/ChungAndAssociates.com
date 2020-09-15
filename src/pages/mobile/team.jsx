import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TeamContent from "../../components/team/teamContent";
import Footer from "../../components/mobile/footer";

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
   
      <div style={{ margin:"0px", color: "white", background: "#00AEEF" }}>
        <TeamContent />
        <Footer />
      </div>
    </div>
  );
}
