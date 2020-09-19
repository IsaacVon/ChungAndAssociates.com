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
import JohnK from "../../components/mobile/testimonials/johnK";
import Footer from "../../components/desktop/footer";
import { makeStyles } from "@material-ui/core/styles";
import image6 from "../../images/6.jpg";
import image7 from "../../images/7.jpg";
import image8 from "../../images/8.jpg";
import image9 from "../../images/9.jpg";

import Typography from "@material-ui/core/Typography";
import NavBar from "../../components/desktop/navBarDesktop";
import logo from "../../logos/chung-logo.svg";

import "../../App.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function TestimonialsDesktop() {
  const classes = useStyles();

  // Margin for images
  // Margin for people

  return (
    <div className={classes.root}>
      <div className="navbarPositionerStickyDesktop">
        <div className="serviceLogoContainer">
          <div>
            <a href="/">
              <img className="logo2" src={logo} alt="Logo" />
            </a>
            <div className="tagLineDesktop">Building Quality Organizations</div>
          </div>
        </div>
        <div className="navbarPositioner">
          <NavBar />
        </div>
      </div>
      <Typography style={{ textAlign: "center", paddingTop: "183px" }}>
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
          People Are Saying
        </span>
      </Typography>
      <div className="testimonialCardDesktop">
        <ChipC desktop={true} />
      </div>
      <div className="imgDiv4">
        {/* <Parallax y={[-60, 0]}> */}
        <img className="desert" width="100%" src={image6} alt="desert" />
        {/* </Parallax> */}
      </div>
      <div className="testimonialCardDesktop">
        <MikeR desktop={true} />
      </div>

      <div
        className="testimonialCardDesktop"
        style={{
          background: "#e4faff",
        }}
      >
        <JohnL desktop={true} />
      </div>
      <div className="testimonialCardDesktop">
        <JeffE desktop={true} />
      </div>

      <div className="imgDiv4">
        {/* <Parallax y={[-60, 0]}> */}
        <img className="snow" width="100%" src={image7} alt="snow" />
        {/* </Parallax> */}
      </div>
      <div className="testimonialCardDesktop">
        <PrestonW desktop={true} />
      </div>

      <div
        className="testimonialCardDesktop"
        style={{
          background: "#E4FAFF",
        }}
      >
        <BillF desktop={true} />
      </div>
      <div id="hashtest" className="testimonialCardDesktop">
        <SteveS desktop={true} />
      </div>
      <div className="imgDiv4">
        <img className="surf" width="100%" src={image8} alt="surf" />
      </div>
      <div className="testimonialCardDesktop">
        <JimP desktop={true} />
      </div>
      <div
        className="testimonialCardDesktop"
        style={{
          background: "#E9EDFD",
        }}
      >
        <JanetL desktop={true} />
      </div>
      <div className="testimonialCardDesktop">
        <MaryA desktop={true} />
      </div>

      <div
        className="testimonialCardDesktopBottom"
        style={{
          background: "#e4faff",
        }}
      >
        <JohnK desktop={true} />
      </div>

      <div className="imgDiv5">
        <img className="waterfall" width="100%" src={image9} alt="waterfall" />
      </div>

      <Footer />
    </div>
  );
}
