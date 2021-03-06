import React from "react";

export default function SteveS({ desktop }) {

  return (
    <div
      className={
        desktop
          ? "testimonialContentContainerDesktop"
          : "testimonialContentContainer"
      }
    >
      <div
        className={desktop ? "testimonialReviewDesktop" : "testimonialReview"}
      >
        <p>
          {" "}
          We have worked with Liennette for nearly eight years, since 2012. She brings
          considerable experience and financial expertise to our business. But
          more importantly, she brings insight and ideas that can only come from
          engaging with a broad cross-section of quality companies in our
          industry. We have had tremendous ROI from her services and continue to
          retain her as a trusted advisor for the long term!
        </p>
        <p>
          Needless to say, I am very pleased with Liennette. She’s an integral
          part of my decision making.
        </p>
      </div>
      <div className="testimonialName">
        <span className="testimonialIconBlue">■ </span>
        Steve Sumner{" "}
      </div>
      <div className="testimonialTitle">President / Centriworks</div>
    </div>
  );
}
