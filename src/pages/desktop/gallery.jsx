import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import NavBar from "../../components/desktop/navBarDesktop";
import Footer from "../../components/desktop/footer";
import logo from "../../logos/chung-logo.svg";

import image1 from "../../images/events/1.jpeg";
import image2 from "../../images/events/2.jpeg";
import image3 from "../../images/events/3.jpeg";
import image4 from "../../images/events/4.jpeg";
import image5 from "../../images/events/5.jpeg";
import image6 from "../../images/events/6.jpeg";
import image7 from "../../images/events/7.jpeg";
import image8 from "../../images/events/8.jpeg";
import image9 from "../../images/events/9.png";

import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    margin: "auto",
    flexGrow: 1,
    width: "90%",
  },
}));

export default function Gallery() {
  const classes = useStyles();

  return (
    <>
        <div className="serviceLogoContainer">
          <a href="/">
            <img className="logo2" src={logo} alt="Logo" />
          </a>
          <div className="tagLineDesktop">Building Quality Organizations</div>
        </div>
        <div className="navbarPositioner">
          <NavBar />
        </div>

      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid className="photoGrid" className="photoGrid" item xs={6} sm={4}>
            <img width="100%" src={image4} alt="conference" />
          </Grid>{" "}
          <Grid className="photoGrid" item xs={6} sm={4}>
            <img width="100%" src={image5} alt="drinks" />
          </Grid>{" "}
          <Grid className="photoGrid" item xs={12} sm={4}>
            <img width="100%" src={image3} alt="nightgroup" />
          </Grid>{" "}
          <Grid className="photoGrid" item xs={6} sm={4}>
            <img width="100%" src={image6} alt="conference2" />
          </Grid>{" "}
          <Grid className="photoGrid" item xs={6} sm={4}>
            <img width="100%" src={image8} alt="presentation" />
          </Grid>{" "}
          <Grid className="photoGrid" item xs={6} sm={4}>
            <img width="100%" src={image1} alt="dinner" />
          </Grid>{" "}
          <Grid className="photoGrid" item xs={6} sm={4}>
            <img width="100%" src={image2} alt="officegroup" />
          </Grid>{" "}
          <Grid className="photoGrid" item xs={6} sm={4}>
            <img width="100%" src={image7} alt="conference3" />
          </Grid>{" "}
          <Grid className="photoGrid" item xs={6} sm={4}>
            <img width="100%" src={image9} alt="dinner2" />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </>
  );
}
