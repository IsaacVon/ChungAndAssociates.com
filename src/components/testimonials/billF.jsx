import React from "react";
import Typography from "@material-ui/core/Typography";
// import "../../App.css"

export default function BillF() {
  return (
    <div
      // className="testamonial" // why isnt
      style={{ margin: " 00px 30px 00px 30px", padding: " 25px 0px 25px 0px" }}
    >
      <Typography style={{ fontSize: "15px", fontWeight: "300" }}>
        Liennette Chung has worked with Fraser as a virtual CFO to our
        organization and trusted advisor me and the leadership for since 2012.
        Her knowledge on acquisitions, industry financial model and organic
        growth, and read on people have helped Fraser drive a high OML Operating
        maturity level. Most important she is a valued member of the Fraser
        Leadership team who provides direct and succinct feedback and insights
        that are invaluable. Together with Liennette, our Organization have more
        than doubled in size and bottom line. I trust Liennette wholeheartedly.
      </Typography>{" "}
      <Typography
        style={{
          marginTop: "15px",
          fontSize: "14px",
          fontWeight: "bold",
          font: "Rufina",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "900",
            color: "#81D8D0",
          }}
        >
          ■{" "}
        </span>
        Bill Fraser
      </Typography>
      <Typography
        style={{ marginLeft: "17px", fontSize: "14px", font: "Rufina" }}
      >
        President & Owner / Fraser AIS, Inc.{" "}
      </Typography>
    </div>
  );
}
