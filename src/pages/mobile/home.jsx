import React from "react";
import Main from "../../components/mobile/home/main";
import About from "../../components/mobile/home/about";
import Services from "../../components/mobile/home/services";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../../components/mobile/footer";

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
      <div id="aboutUs" style={{ background: "#FFFFFF" }}>
        <About />
      </div>
      <div id="services" style={{ background: "#ABE4F0" }}>
        <div id="services">
          <Services />
        </div>
        <Footer />
      </div>
    </div>
  );
}
