import React from "react";

import ServiceMain from "../../components/desktop/services/ServiceMain";
import Footer from "../../components/desktop/footer";
import NavBar from "../../components/desktop/navBarDesktop";

import "../../App.css";

export default function Services() {
  return (
    <>
      <ServiceMain />
      <Footer />
      <div className="navbarPositioner">
        <NavBar />
      </div>
    </>
  );
}
