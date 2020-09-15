import React from "react";

export default function JanetL({ desktop }) {
  console.log("desktop janetL", desktop)

  return (
    <div className={desktop ? "testimonialContentContainerDesktop" : "testimonialContentContainer" }>
      <div className={desktop ? "testimonialReviewDesktop" : "testimonialReview"}>
        Liennette understands the imaging business and is successfully guiding
        us through the chaos of growth. She has given us the necessary tools to
        propel our business to the next level! She is sharp, direct, and pushes
        us forward.
      </div>{" "}
      <div className="testimonialName">
        <span className="testimonialIconPurple">■ </span>
        Janet Langarek{" "}
      </div>
      <div className="testimonialTitle">
        VP of Operations / Applied Imaging, Inc.{" "}
      </div>
    </div>
  );
}
