import React from "react";
import Typography from "@material-ui/core/Typography";
import image2 from "../../images/2.jpg";

export default function About() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        This is Who We Are
      </Typography>
      <Typography color="secondary" variant="h6" gutterBottom>
        We work with entrepreneurs to mobilize their resources and bring out the
        full potential of their businesses.
      </Typography>

      <img width="100%" src={image2} alt="Bamboo" />

      <Typography variant="body1">
        The core of our services revolves around business planning with a focus
        in the technology and office solutions industry. Whether the mission is
        to advance the Company’s growth or enhance its performance, venture into
        new market territories or expand into new product lines, Chung and
        Associates assists in the preparation and execution to make it happen.
        We facilitate toward building a solid leadership team and operating
        infrastructure to continuously scale the organization towards growth and
        profit.{" "}
      </Typography>
    </div>
  );
}
