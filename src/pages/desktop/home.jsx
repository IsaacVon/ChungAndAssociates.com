import React from "react";
import About from "../../components/desktop/home/about";

import Main from "../../components/desktop/home/main"
import Footer from "../../components/desktop/footer";
import image2 from "../../images/2.jpg";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
      <Main>
      </Main>
      <About />
      <div
        style={{
          margin: " 0px 10px 0px 10px",
          overflow: "hidden",
          height: "370px",
          borderRadius: "7px",
        }}
      >
        <Parallax y={[-30, 30]}>
          <img
            style={{ margin: "-320px 0px 0px 0px" }}
            width="120%"
            src={image2}
            alt="Bamboo"
          />
        </Parallax>
      </div>
      <Footer />
    </>
  );
}