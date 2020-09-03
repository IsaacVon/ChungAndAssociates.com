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
      <Main />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
