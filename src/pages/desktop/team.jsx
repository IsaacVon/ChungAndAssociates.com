import React from "react";
import NavBar from "../../components/desktop/navBarDesktop";
import logo from "../../logos/chung-logo.svg";
import Footer from "../../components/desktop/footer";
import Grid from "@material-ui/core/Grid";

import image4 from "../../images/4.jpg";

import "../../App.css";

export default function Services() {
  return (
    <>
      <div className="navbarPositionerStickyDesktop">
        <div className="serviceLogoContainer">
          <a href="/">
            <img className="logo2" src={logo} alt="Logo" />
          </a>
          <div className="tagLineDesktop">Building Quality Organizations</div>
        </div>
        <div className="navbarPositioner">
          <NavBar />
        </div>
      </div>

      <div className="teamSpacer"></div>

      <Grid container spacing={2}>
        <Grid item xs={6} md={5}>
          <div className="teamImages">
            <div className="teamImageWrapper">
              <img
                className="team"
                width="570px"
                src={image4}
                alt="conference"
              />
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
                Riordan and Associates | Reservoir LLC
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} md={7}>
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
                globally in Hong Kong.
              </p>
              <p>
                Later, Liennette joined Credit Suisse and was responsible over
                the performance health of disciplines across Asia Pacific. As
                opportunities presented after the 2000 Asian Financial Crisis,
                Liennette established Renaissance International Investments in
                Jakarta, Indonesia and served as one of its two key principals
                to invest in distressed assets in the Southeast Asia. Upon her
                return home, she joined Global Imaging in 2005 and served as
                Senior VP and CFO for their California retail flagship.
              </p>
              <p>
                Liennette formed Chung & Associates Inc. in late 2012 to assist
                clients in building quality organizations. Chung and Associates’
                clients include thirteen of the top twenty-five office
                dealerships in America. Liennette also serves as a private
                counsel to several global family enterprises.
              </p>
              <p>
                At the same time, Liennette Chung formed Pacific ConnecTeq
                (PCT), an IT & Ricoh dealership in 2013 to establish independent
                client representation for southern California. PCT was meant to
                be an organized stewpot of Liennette’s knowledge and
                experiences. The Company became a nationally award-winning
                establishment and was constantly courted for acquisition. PCT
                was established for specific growth and divestiture to not only
                demonstrate knowhow of Chung and Associates, but also the
                investment opportunity in the imaging industry. Seven years
                after its formulation, Pacific ConnecTeq was sold to Advance
                Office, on June 1, 2020.
              </p>
              <p>
                Liennette is a California Certified Public Accountant (CPA) and
                holds two Bachelor of Arts in 1) International Economics and 2)
                East Asian Language & Culture from the University of California
                Los Angeles (UCLA).
              </p>
            </div>
          </div>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}
