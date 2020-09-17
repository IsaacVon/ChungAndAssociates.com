import React from "react";
import ChipC from "../../components/mobile/testimonials/chipC";
import MikeR from "../../components/mobile/testimonials/mikeR";
import JohnL from "../../components/mobile/testimonials/johnL";
import JeffE from "../../components/mobile/testimonials/jeffE";
import PrestonW from "../../components/mobile/testimonials/prestonW";
import BillF from "../../components/mobile//testimonials/billF";
import SteveS from "../../components/mobile/testimonials/steveS";
import JimP from "../../components/mobile/testimonials/jimP";
import JanetL from "../../components/mobile/testimonials/janetL";
import MaryA from "../../components/mobile/testimonials/maryA";
import Contact from "../../components/mobile/testimonials/contact";
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

export default function Testimonials() {
  const classes = useStyles();

  // Margin for images
  // Margin for people

  return (
    <div className={classes.root}>
      <Typography style={{ textAlign: "center", paddingTop: "100px" }}>
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

      <ChipC desktop={false} />
      <div className="imgDiv1">
        {/* <Parallax y={[-10, 0]}> */}
        <img width="100%" src={image6} alt="desert" />
        {/* </Parallax> */}
      </div>
      <MikeR desktop={false} />

      <div style={{ background: "#E4FAFF" }}>
        <hr className="hrTestimonials"></hr>

        <JohnL desktop={false} />

        <hr className="hrTestimonials"></hr>
      </div>
      <JeffE desktop={false} />
      <div className="imgDiv1">
        {/* <Parallax y={[-10, 0]}> */}
        <img width="100%" src={image7} alt="snow" />
        {/* </Parallax> */}
      </div>
      <PrestonW desktop={false} />
      <div style={{ background: "#E4FAFF" }}>
        <hr className="hrTestimonials"></hr>
        <BillF desktop={false} />
        <hr className="hrTestimonials"></hr>
      </div>
      <SteveS desktop={false} />
      <div className="imgDiv2">
        {/* <Parallax y={[-90, 0]}> */}
        <img
          style={{ margin: "-300px 50px 00px -50px" }}
          width="500px"
          src={image8}
          alt="surf"
        />
        {/* </Parallax> */}
      </div>
      <JimP desktop={false} />
      <div style={{ background: "#E9EDFD" }}>
        <hr className="hrTestimonials"></hr>
        <JanetL desktop={false} />
        <hr className="hrTestimonials"></hr>
      </div>
      <MaryA desktop={false} />

      <div id="contactUs" className="footerBackground">
        <div className="footerContent">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
