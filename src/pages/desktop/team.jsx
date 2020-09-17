import React from "react";
import NavBar from "../../components/desktop/navBarDesktop";
import logo from "../../logos/chung-logo.svg";
import Footer from "../../components/desktop/footer";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import image4 from "../../images/4.jpg";
import image5 from "../../images/5.jpg";

import "../../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <>
      <div className="serviceLogoContainer">
        <img className="logo2" src={logo} alt="Logo" />
        <div className="tagLineDesktop">Building Quality Organizations.</div>
      </div>
      <div className="navbarPositioner">
        <NavBar />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className="teamImages">
            <div className="teamImageWrapper">
              <img
                className="team"
                width="570px"
                src={image4}
                alt="conference"
              />
            </div>

            <div className="teamImageWrapper">
              <img
                className="office"
                height="620px"
                src={image5}
                alt="conference"
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="teamWrapper">
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
            <div className="teamInfo">
              <p>
                Liennette started her career with PricewaterhouseCoopers (PwC)
                and lead the practice both locally in Los Angeles as well as
                globally in Hong Kong. Her client base included Blue Cross Blue
                Shield, AIG Corporation, The International Monetary Fund (IMF),
                AIA Corporation, Peregrine Investments, Barclays Capital, UBS,
                China Trust and HSBC.
              </p>
              <p>
                In 1999, Liennette joined Credit Suisse and was responsible over
                the performance assessment and operating health of assigned
                disciplines across Asia Pacific. She later established
                Renaissance International Investments in Jakarta, Indonesia and
                served as one of its two key principals and positioned two
                private equity funds for investing in distressed assets in the
                Southeast Asia. Upon her return home, she joined Global Imaging
                in 2005 and served as Senior VP and CFO for their flagship
                retail business for Southern California.
              </p>
              <p>
                Liennette formed Chung & Associates Inc. in late 2012 to
                assisting clients in building quality organizations. Our clients
                include thirteen of the top twenty-five office dealerships in
                America. She also served as the private counsel to several
                international family enterprises.
              </p>
              <p>
                In mid October 2013, Liennette Chung formed Pacific ConnecTeq, a
                Ricoh dealership to establish independent client representation
                for southern California. PCT was meant to be an organized
                stewpot of Liennette’s knowledged and knowhow. The Company was a
                nationally award-winning establishment and constantly courted
                for acquisition. Precisely seven years after its formulation,
                Pacific ConnecTeq was recently was sold to Advance Office, on
                June 1, 2020.
              </p>
              <p>
                Liennette is a California Certified Public Accountant (CPA) and
                holds two Bachelor of Arts in 1) International Economics and 2)
                East Asian Language & Culture from the University of California
                Los Angeles (UCLA).
              </p>
            </div>
            <div className="teamInfoFooter">
              Associated Partners
              <div
                style={{
                  fontSize: "19px",
                  fontWeight: "600",
                  marginTop: "10px",
                }}
              >
                Riordan and Associates | Sudbay & Associates
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}
