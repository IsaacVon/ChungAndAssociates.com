import React from "react";
import "../../../App.css";
import logo from "../../../logos/chung-logo.svg";
import NavBar from "../../../components/desktop/navBarDesktop";

export default function Main() {
  return (
    <>
      <div className="navContentHomeWrapper">
        <div className="navBackgroundHomeDesktop">
          <div className="navbarPositionerStickyDesktopHome">
            <div className="navbarPositionerHome">
              <NavBar />
            </div>
          </div>

          {/* <NavBar /> */}
          <div className="logoTaglineContainer">
            <img className="logo2" src={logo} alt="Logo" />
            <div className="tagLineDesktop">Building Quality Organizations</div>
          </div>
        </div>
      </div>
    </>
  );
}
