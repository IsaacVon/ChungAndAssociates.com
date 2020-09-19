import React from "react";
import About from "../../components/desktop/home/about";

import Main from "../../components/desktop/home/main";
import Footer from "../../components/desktop/footer";
import image2 from "../../images/2.jpg";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
      <Main />
      <div id="aboutUs">
        <About />
      </div>
      <div
        style={{
          overflow: "hidden",
          minHeight: "200px",
          height: "35vw",
          maxHeight: "600px",
        }}
      >
        <Parallax y={[-20, 20]}>
          <img className="bambooHome" width="120%" src={image2} alt="Bamboo" />
        </Parallax>
      </div>
      <div id="contactUs">

      <Footer />
      </div>
    </>
  );
}
