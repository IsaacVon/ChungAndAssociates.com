import React from "react";
import About from "../../components/desktop/home/about";

import Footer from "../../components/desktop/footer";
import image2 from "../../images/2.jpg";

export default function Home() {
  return (
    <>
      <About />

      <div
        style={{
          margin: " 0px 0px 0px 0px",
          overflow: "hidden",
          height: "370px",
        }}
      >
        <img
          style={{ margin: "-320px 0px 0px 0px" }}
          width="100%"
          src={image2}
          alt="Bamboo"
        />
      </div>
      <Footer />
    </>
  );
}
