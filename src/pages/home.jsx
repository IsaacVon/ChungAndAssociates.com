import React from "react";
import Main from "../components/home/main";
import About from "../components/home/about";
import Services from "../components/home/services";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <h1>-- HOME --</h1>
      <Main />
      <About />
      <Services />
      <Footer />
    </>
  );
}
