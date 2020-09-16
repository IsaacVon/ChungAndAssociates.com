import React from "react";
import "../../../App.css";
import NavBar from "../../../components/desktop/navBarDesktop";
import logo from "../../../logos/chung-logo.svg";



export default function ServiceMain() {
  return (
    <>
      <div className="serviceBackground">
      <div className="backgroundGradient">
        {/* <NavBar /> */}
        <div className="serviceLogoContainer">
          <img className="logo2" src={logo} alt="Logo" />
          <div className="tagLineDesktop">Building Quality Organizations.</div>
        </div>
        <div className="serviceContainer">
          <div className="servicesWeOffer">Services We Offer</div>

          <ul className="serviceList">
            <li>• Performance Assessment</li>
            <li>• Business Planning & Oversight</li>
            <li>• Financial Modeling & Benchmark Development</li>
            <li>• Financial Statement Compilation & Review</li>
            <li>• Organization Structure, Process Design & Implementation</li>
            <li>• Operations & Controls Assessment & Attestation</li>
            <li>• Acquisition Review & Valuation</li>
          </ul>
          <ul className="serviceList">
            <li>• Due Diligence for Acquisition</li>
            <li>• Mergers Implementation & Business Consolidation</li>
            <li>• Resource & Human Capital Alignment</li>
            <li>• Leadership Coaching & Development</li>
            <li>• Next Generation Development</li>
            <li>• Succession Planning</li>
            <li>• Professional Outsourcing & Support</li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}
