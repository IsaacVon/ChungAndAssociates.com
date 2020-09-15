import React from "react";
import ChipC from "../../components/testimonials/chipC";
import MikeR from "../../components/testimonials/mikeR";
import JohnL from "../../components/testimonials/johnL";
import JeffE from "../../components/testimonials/jeffE";
import PrestonW from "../../components/testimonials/prestonW";
import BillF from "../../components/testimonials/billF";
import SteveS from "../../components/testimonials/steveS";
import JimP from "../../components/testimonials/jimP";
import JanetL from "../../components/testimonials/janetL";
import MaryA from "../../components/testimonials/maryA";
import Contact from "../../components/testimonials/contact";
import Footer from "../../components/mobile/footer";
import { makeStyles } from "@material-ui/core/styles";
import image6 from "../../images/6.jpg";
import image7 from "../../images/7.jpg";
import image8 from "../../images/8.jpg";
import Typography from "@material-ui/core/Typography";
import { Parallax } from "react-scroll-parallax";
import "../../App.css";

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
      <div className="imgDiv1">
        <Parallax y={[-10, 0]}>
          <img width="100%" src={image6} alt="desert" />
        </Parallax>
      </div>
      <MikeR />

      <div style={{ background: "#E4FAFF" }}>
        <hr className="hrTestamonials"></hr>

        <JohnL />

        <hr className="hrTestamonials"></hr>
      </div>
      <JeffE />
      <div className="imgDiv1">
        <Parallax y={[-10, 0]}>
          <img width="100%" src={image7} alt="snow" />
        </Parallax>
      </div>
      <PrestonW />
      <div style={{ background: "#E4FAFF" }}>
        <hr className="hrTestamonials"></hr>
        <BillF />
        <hr className="hrTestamonials"></hr>
      </div>
      <SteveS />
      <div className="imgDiv2">
        <Parallax y={[-90, 0]}>
          <img
            style={{ margin: "-300px 50px 00px -50px" }}
            width="500px"
            src={image8}
            alt="surf"
          />
        </Parallax>
      </div>
      <JimP />
      <div style={{ background: "#E9EDFD" }}>
        <hr className="hrTestamonials"></hr>
        <JanetL />
        <hr className="hrTestamonials"></hr>
      </div>
      <MaryA />

      <div className="footerBackground">
        <div className="footerContent">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
