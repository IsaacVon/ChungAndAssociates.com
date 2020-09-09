import React from "react";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

export default function BillF() {
  return (
    <div className="testamonialContentContainer">
      <Typography class="testamonialReview">
        Liennette Chung has worked with Fraser as a virtual CFO to our
        organization and trusted advisor me and the leadership for since 2012.
        Her knowledge on acquisitions, industry financial model and organic
        growth, and read on people have helped Fraser drive a high OML Operating
        maturity level. Most important she is a valued member of the Fraser
        Leadership team who provides direct and succinct feedback and insights
        that are invaluable. Together with Liennette, our Organization have more
        than doubled in size and bottom line. I trust Liennette wholeheartedly.
      </Typography>{" "}
      <Typography class="testamonialName">
        <span className="testamonialIconBlue">■ </span>
        Bill Fraser
      </Typography>
      <Typography class="testamonialTitle">
        President & Owner / Fraser AIS, Inc.{" "}
      </Typography>
    </div>
  );
}
