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

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Testamonials() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {" "}
      <ChipC />
      <img width="100%" src={image6} alt="desert" />
      <MikeR />
      <JohnL />
      <JeffE />
      <img width="100%" src={image7} alt="snow" />
      <PrestonW />
      <BillF />
      <SteveS />
      <img width="100%" src={image8} alt="surf" />
      <JimP />
      <JanetL />
      <MaryA />
      <Contact />
      <Footer />
    </div>
  );
}
