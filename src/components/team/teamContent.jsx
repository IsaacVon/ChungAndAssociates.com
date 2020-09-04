import React from "react";
import Typography from "@material-ui/core/Typography";
import ImageCard from "../../components/imageCard";

export default function TeamContent() {

  return (
    <>
      <Typography variant="h4" gutterBottom>
        The Team
      </Typography>
      <Typography variant="body1" gutterBottom>
        Liennette started her career with PricewaterhouseCoopers (PwC) and lead
        the practice both locally in Los Angeles as well as globally in Hong
        Kong. Her client base included Blue Cross Blue Shield, AIG Corporation,
        The International Monetary Fund (IMF), AIA Corporation, Peregrine
        Investments, Barclays Capital, UBS, China Trust and HSBC. In 1999,
        Liennette joined Credit Suisse and was responsible over the performance
        assessment and operating health of assigned disciplines across Asia
        Pacific. She later established Renaissance International Investments in
        Jakarta, Indonesia and served as one of its two key principals and
        positioned two private equity funds for investing in distressed assets
        in the Southeast Asia. Upon her return home, she joined Global Imaging
        in 2005 and served as Senior VP and CFO for their flagship retail
        business for Southern California.{" "}
      </Typography>
      <ImageCard
        title="desert"
        height="252px"
        image={require("../../images/5.jpg")}
      />
      <Typography variant="body1" gutterBottom>
        Liennette formed Chung & Associates Inc. in late 2012 to assisting
        clients in building quality organizations. Our clients include thirteen
        of the top twenty-five office dealerships in America. She also served as
        the private counsel to several international family enterprises. In mid
        October 2013, Liennette Chung formed Pacific ConnecTeq, a Ricoh
        dealership to establish independent client representation for southern
        California. PCT was meant to be an organized stewpot of Liennette’s
        knowledged and knowhow. The Company was a nationally award-winning
        establishment and constantly courted for acquisition. Precisely seven
        years after its formulation, Pacific ConnecTeq was recently was sold to
        Advance Office, on June 1, 2020. Liennette is a California Certified
        Public Accountant (CPA) and holds two Bachelor of Arts in 1)
        International Economics and 2) East Asian Language & Culture from the
        University of California Los Angeles (UCLA).
      </Typography>
      <Typography variant="body1" gutterBottom>
        Associated Partners Riordan and Associates Sudbay & Associates
      </Typography>
    </>
  );
}