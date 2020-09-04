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
import ImageCard from "../components/imageCard";

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
      <ImageCard
        title="desert"
        height="252px"
        image={require("../images/6.jpg")}
      />
      <MikeR />
      <JohnL />
      <JeffE />
      <ImageCard
        title="snow"
        height="249px"
        image={require("../images/7.jpg")}
      />
      <PrestonW />
      <BillF />
      <SteveS />
      <ImageCard
        title="surf"
        height="600px"
        image={require("../images/8.jpg")}
      />
      <JimP />
      <JanetL />
      <MaryA />
      <Contact />
      <Footer 
      />
    </div>
  );
}
