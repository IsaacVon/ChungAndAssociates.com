import React from "react";

import Footer from "../../components/mobile/footer";
import { makeStyles } from "@material-ui/core/styles";
import Gallery from "react-photo-gallery";

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

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function EventGallery() {
  const classes = useStyles();

  const photos = [
    {
      src: image1,
      width: 4,
      height: 3,
    },
    {
      src: image2,
      width: 1,
      height: 1,
    },
    {
      src: image3,
      width: 2316,
      height: 1614,
    },
    {
      src: image4,
      width: 4032,
      height: 2427,
    },
    {
      src: image5,
      width: 1,
      height: 1,
    },
    {
      src: image6,
      width: 1884,
      height: 1422,
    },
    {
      src: image7,
      width: 2160,
      height: 1230,
    },
    {
      src: image8,
      width: 1213,
      height: 1047,
    },
    {
      src: image9,
      width: 960,
      height: 720,
    },
  ];

  return (
    <div className={classes.root}>
      <div className="gallerySpacer"></div>
      <Gallery margin={2} photos={photos} />
      <div style={{ background: "#ABE4F0" }}>
        <Footer />
      </div>
    </div>
  );
}
