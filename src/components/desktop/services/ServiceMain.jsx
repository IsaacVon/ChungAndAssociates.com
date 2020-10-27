import React from "react";
import "../../../App.css";
import logo from "../../../logos/chung-logo.svg";

export default function ServiceMain() {
  return (
    <>
      <div className="serviceBackground">
        <div className="serviceLogoContainer">
          <a href="/">
            <img className="logo2" src={logo} alt="Logo" />
          </a>
          <div className="tagLineDesktop">Building Quality Organizations</div>
        </div>
        <div className="serviceContainer">
          <div className="servicesWeOffer">Services We Offer</div>

          <ul className="serviceList">
            <li>Financial Performance Assessment</li>
            <li>Organization Evaluation</li>
            <li>Business Planning and Oversight</li>
            <li>Financial Modeling and Benchmark Development</li>
            <li>Financial Statement Compilation and Review</li>
            <li>
              Organization Structure & Process Design and Implementation
            </li>
            <li>Operations & Controls Assessment and Attestation</li>
            <li>Business Valuation</li>
          </ul>
          <ul className="serviceList">
            <li>Business Preparation for Acquisition</li>
            <li>Due Diligence and Special Attestation</li>
            <li>Mergers Implementation & Business Consolidation</li>
            <li>Resource and Human Capital Alignment</li>
            <li>Leadership Coaching & Development</li>
            <li>Professional Outsourcing and Support</li>
            <li>Succession Planning</li>
            <li>Next Generation Coaching & Development</li>
          </ul>
        </div>
      </div>
    </>
  );
}
