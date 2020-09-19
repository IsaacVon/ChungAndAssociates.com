import React from "react";

export default function JohnK({ desktop }) {
  return (
    <div
      className={
        desktop
          ? "testimonialContentContainerDesktopBottom"
          : "testimonialContentContainerJohnK"
      }
    >
      <div
        className={desktop ? "testimonialReviewDesktop" : "testimonialReview"}
      >
        <p>
          I have worked with Liennette Chung on many projects since 2012.
          Liennette has done M & A valuations, business planning and financial
          analysis for my company. Chung and Associates also did the valuation
          of my business and assisted in the sale of my business.
        </p>
        <p>
          If you are building, buying, or selling a company, Chung and
          Associates will provide maximum ROI!
        </p>
      </div>
      <div className="testimonialName">
        <span className="testimonialIconBlue">■ </span>
        John Kuchta
      </div>
      <div className="testimonialTitle">President / SolutionOne</div>
    </div>
  );
}
