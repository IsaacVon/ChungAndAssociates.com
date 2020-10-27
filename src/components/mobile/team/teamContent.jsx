import React from "react";
import "../../../App.css";
import Typography from "@material-ui/core/Typography";
import image5 from "../../../images/5.jpg";

export default function TeamContent() {
  return (
    <>
      <Typography style={{ textAlign: "center", paddingTop: "33px" }}>
        <span
          style={{
            fontSize: "25px",
            fontWeight: "300",
            lineHeight: "29px",
          }}
        >
          The
        </span>
        <span
          style={{
            fontSize: "25px",
            fontWeight: "900",
            lineHeight: "29px",
          }}
        >
          {" "}
          Team.
        </span>
      </Typography>

      <Typography
        style={{
          margin: "28px",
          fontWeight: "normal",
          fontSize: "15px",
          textAlign: "justify",
        }}
      >
        <p>
          Liennette started her career with PricewaterhouseCoopers (PwC) and
          lead the practice both locally in Los Angeles as well as globally in
          Hong Kong.
        </p>
        <p>
          Later, Liennette joined Credit Suisse and was responsible over the
          performance health of disciplines across Asia Pacific. As
          opportunities presented after the 2000 Asian Financial Crisis,
          Liennette established Renaissance International Investments in
          Jakarta, Indonesia and served as one of its two key principals to
          invest in distressed assets in the Southeast Asia. Upon her return
          home, she joined Global Imaging in 2005 and served as Senior VP and
          CFO for their California retail flagship.
        </p>
        <p>
          Liennette formed Chung & Associates Inc. in late 2012 to assist
          clients in building quality organizations. Chung and Associates’
          clients include thirteen of the top twenty-five office dealerships in
          America. Liennette also serves as a private counsel to several global
          family enterprises.
        </p>
      </Typography>
      <img width="100%" src={image5} alt="Office" />

      <Typography
        style={{
          margin: "28px",
          fontWeight: "normal",
          fontSize: "15px",
          textAlign: "justify",
        }}
      >
        <p>
          At the same time, Liennette Chung formed Pacific ConnecTeq (PCT), an
          IT & Ricoh dealership in 2013 to establish independent client
          representation for southern California. PCT was meant to be an
          organized stewpot of Liennette’s knowledge and experiences. The
          Company became a nationally award-winning establishment and was
          constantly courted for acquisition. PCT was established for specific
          growth and divestiture to not only demonstrate knowhow of Chung and
          Associates, but also the investment opportunity in the imaging
          industry. Seven years after its formulation, Pacific ConnecTeq was
          sold to Advance Office, on June 1, 2020.
        </p>
        <p>
          Liennette is a California Certified Public Accountant (CPA) and holds
          two Bachelor of Arts in 1) International Economics and 2) East Asian
          Language & Culture from the University of California Los Angeles
          (UCLA).
        </p>
      </Typography>

      <hr className="hrTeam"></hr>
      <Typography
        style={{
          textAlign: "center",
          fontWeight: "300",
          fontSize: "17px",
          margin: "0px 0px 15px 0px",
        }}
      >
        Associated Partners
      </Typography>
      <Typography
        style={{
          textAlign: "center",
          fontWeight: "900",
          fontSize: "17px",
        }}
      >
        Riordan and Associates
      </Typography>
      <Typography
        style={{
          textAlign: "center",
          fontWeight: "900",
          fontSize: "17px",
          marginBottom: "50px",
        }}
      >
        Reservoir LLC
      </Typography>
    </>
  );
}
