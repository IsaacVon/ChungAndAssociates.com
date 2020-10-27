import React from "react";

export default function MikeR({desktop}) {

  return (
    <div className={desktop ? "testimonialContentContainerDesktop" : "testimonialContentContainer" }>
      <div className={desktop ? "testimonialReviewDesktop" : "testimonialReview"}>
        <p>
          Liennette Chung was hired as the CFO for one of my clients in 2005. I
          was involved in the hiring process. Her qualifications were
          outstanding as she had a broad background In making high dollar
          financial decisions. Little did I know at that time that I was meeting
          a high capacity person who would have a tremendous impact on my
          professional life. For a number of years, I observed Liennette build
          powerful admin and operations teams that increased the production of
          the entire company. Sales and service people alike respect her. Then
         we joined forces in Building Quality Organizations through our
          Consulting Practice. Liennette’s principle area of financial expertise
          has benefited many of our clients and greatly impacted their
          profitability. She has maximum respect from all level of individuals
          and with all the companies we work with. I have learned much from
          Liennette not only in the financial realm but also about total
          business decisions and investments.
        </p>
        <p>
          She's has a strong read on people and is extremely insightful. Our
          clients often defer to Liennette in hiring and developing their
          executive team.
        </p>
        <p>
          Little did I know when I met Liennette 15 years ago the tremendous
          impact she would make in my life and eventually the tremendous impact
          she would have on our clients, their families and businesses. It has
          been a growth producing and fun ride. I look forward to many more
          years being associated with Liennette.
        </p>
      </div>
      <div className="testimonialName">
        <span className="testimonialIconBlue">■ </span>
        Mike Riordan
      </div>
      <div className="testimonialTitle">
        President / Riordan and Associates, Inc.
      </div>
    </div>
  );
}
