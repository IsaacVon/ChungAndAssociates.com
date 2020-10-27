import React from "react";

export default function JeffE({desktop}) {

  return (
    <div className={desktop ? "testimonialContentContainerDesktop" : "testimonialContentContainer" }>
      <div className={desktop ? "testimonialReviewDesktop" : "testimonialReview"}>
        I have had the pleasure of working with Liennette for several years on
        multiple projects and my expectations have always been exceeded. Her
        timeliness, attention to detail and genuine concern for providing ROI
        are always front and center. However, it’s her knowledge of the industry
        and sincere care for people that sets her apart.
      </div>{" "}
      <div className="testimonialName">
        <span className="testimonialIconBlue">■ </span>
        Jeff Elkin
      </div>
      <div className="testimonialTitle">
        President & Owner / Advance Business Systems
      </div>
    </div>
  );
}
