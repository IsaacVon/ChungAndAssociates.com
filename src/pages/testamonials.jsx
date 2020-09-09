import React from "react";
import ChipC from "../components/testimonials/chipC";
import MikeR from "../components/testimonials/mikeR";
import JohnL from "../components/testimonials/johnL";
import JeffE from "../components/testimonials/jeffE";
import PrestonW from "../components/testimonials/prestonW";
import BillF from "../components/testimonials/billF";
import SteveS from "../components/testimonials/steveS";
import JimP from "../components/testimonials/jimP";
import JanetL from "../components/testimonials/janetL";
import MaryA from "../components/testimonials/maryA";
import Contact from "../components/testimonials/contact";
import Footer from "../components/footer";
import { makeStyles } from "@material-ui/core/styles";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";
import image8 from "../images/8.jpg";
import image9 from "../images/9.jpg";
import Typography from "@material-ui/core/Typography";
import logo from "../logos/chung-logo.svg";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Testamonials() {
  const classes = useStyles();

  // Margin for images
  // Margin for people

  return (
    <div className={classes.root}>
      <img style={{ margin: "30px 20px 0px 20px" }} src={logo} alt="Logo" />

      <Typography style={{ textAlign: "center", paddingTop: "33px" }}>
        <span
          style={{
            fontSize: "25px",
            fontWeight: "300",
            lineHeight: "29px",
          }}
        >
          What
        </span>
        <span
          style={{
            fontSize: "25px",
            fontWeight: "900",
            lineHeight: "29px",
          }}
        >
          {" "}
          People Are Saying.
        </span>
      </Typography>

      <ChipC />
      <img width="100%" src={image6} alt="desert" />
      <MikeR />

      <div style={{ background: "#E4FAFF" }}>
        <hr
          style={{
            borderWidth: "0px",
            height: "3px",
            backgroundColor: "#989898",
          }}
        ></hr>

        <JohnL />

        <hr
          style={{
            borderWidth: "0px",
            height: "3px",
            backgroundColor: "#989898",
          }}
        ></hr>
      </div>
      <JeffE />
      <img width="100%" src={image7} alt="snow" />
      <PrestonW />
      <div style={{ background: "#E4FAFF" }}>
        <hr
          style={{
            borderWidth: "0px",
            height: "3px",
            backgroundColor: "#989898",
          }}
        ></hr>
        <BillF />
        <hr
          style={{
            borderWidth: "0px",
            height: "3px",
            backgroundColor: "#989898",
          }}
        ></hr>
      </div>
      <SteveS />
      <img width="100%" src={image8} alt="surf" />
      <JimP />
      <div style={{ background: "#E9EDFD" }}>
        <hr
          style={{
            borderWidth: "0px",
            height: "3px",
            backgroundColor: "#989898",
          }}
        ></hr>
        <JanetL />
        <hr
          style={{
            borderWidth: "0px",
            height: "3px",
            backgroundColor: "#989898",
          }}
        ></hr>
      </div>
      <MaryA />
      <img width="100%" src={image9} alt="desert" />

      <div style={{ color: "white", background: "#00AEEF" }}>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
