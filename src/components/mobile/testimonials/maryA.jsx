import React from "react";

export default function MaryA({desktop}) {


  return (
    <div className={desktop ? "testimonialContentContainerDesktop" : "testimonialContentContainer" }>
      <div className={desktop ? "testimonialReviewDesktop" : "testimonialReview"}>
        To compare Liennette to others at her professional level is to compare
        an Olympic athlete to a collegiate player in sports. She develops a
        vision of the goal. then develops and executes a successful gameplan. She
        is able to achieve her goals in a manner that is quicker, more focused,
        and more insightful.
      </div>{" "}
      <div className="testimonialName">
        <span className="testimonialIconBlue">■ </span>
        Mary Ann Harrison{" "}
      </div>
      <div className="testimonialTitle">
        Ex-Partner / PricewaterhouseCoopers (PwC){" "}
      </div>
    </div>
  );
}
