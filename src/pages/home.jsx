import React from "react";
import Main from "../components/home/main";
import About from "../components/home/about";
import Services from "../components/home/services";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../components/footer";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ background: "#73D3E1" }}>
        <Main />
      </div>
      <div style={{ background: "#FFFFFF" }}>
        <About />
      </div>
      <div style={{ background: "#ABE4F0" }}>
        <Services />
        <Footer />
      </div>
    </div>
  );
}
