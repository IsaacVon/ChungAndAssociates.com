import React from "react";

export default function JohnL({desktop}) {

  return (
    <div className={desktop ? "testimonialContentContainerDesktop" : "testimonialContentContainer" }>
      <div className={desktop ? "testimonialReviewDesktop" : "testimonialReview"}>
        <p>
          We’ve been working with Liennette Chung for the past 7 years. The
          first time Liennette Chung said to me that numbers are a language, I
          just brushed it off as CPA talk. Later I would find out she had a
          special knack for uncovering every businesses processes, operating
          strengths and issues down to the most granular level though numbers.
          She’s skilled at uncovering people’s tendencies or habits and how
          these can translate to their roles in business and operations. She has
          uncovered more opportunities within our company to improve
          performance, efficiencies and bottom-line profit better than anyone
          I’ve ever met. In addition to that she is visionary, see the big
          picture and is able to communicate that to everyone in terms they
          understand.
        </p>
        <p>
          Liennette is a great read on people. Most key roles within our
          organization are hired in collaboration with Liennette. She’s a great
          communicator and can instantly gain acceptance with your team. She is
          an extremely talented consultant and I consider Liennette a member of
          our executive team and family.
        </p>
      </div>
      <div className="testimonialName">
        <span className="testimonialIconBlue">■ </span>
        John Lowery
      </div>
      <div className="testimonialTitle">
        President & Owner / Applied Imaging, Inc.
      </div>
    </div>
  );
}
