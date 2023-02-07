import Experience from "./experience";

import crIllustration from "../public/illustrations/cr.svg";
import kccsIllustration from "../public/illustrations/kccs.svg";
import mbaIllustration from "../public/illustrations/mba.svg";
import oasisIllustration from "../public/illustrations/oasis.svg";
import spcIllustration from "../public/illustrations/spc.svg";
import tadpoleIllustration from "../public/illustrations/tadpole.svg";

import { styled } from "../stitches.config";

export default function Experiences() {
  return (
    <Wrapper>
      <Experience
        accentColor="#F2D16B"
        project="Oasis"
        description="Crafted full-stack web development resources, including a workshop and sample projects, while also mentoring student groups to build a project over eight weeks."
        role="Mentor"
        location="Boston, MA"
        dates="Jan ‘23 – Present"
        illustration={oasisIllustration}
      />

      <Experience
        accentColor="#C8102E"
        project="Khoury College of Computer Sciences"
        description="Led weekly lab, hosted routine office hours, and evaluated student homework, lab, and exam submissions from 40+ students each week. Courses: CS 2500 and CS 2510."
        role="Teaching Assistant"
        location="Boston, MA"
        dates="Sep ‘22 – Present"
        illustration={kccsIllustration}
      />

      <Experience
        accentColor="#945CC1"
        project="Tadpole Tutoring"
        description="Engineered front- and back-end systems in support of September 2022
        launch for 300+ users across 3 Boston-based educational
        organizations."
        role="Lead Software Engineer + Product Manager"
        location="Remote / Boston, MA"
        dates="June ‘22 – Present"
        illustration={tadpoleIllustration}
      />

      <Experience
        accentColor="#1e4388"
        project="SPC Financial"
        description="Overhauled internal systems + processes, improving case resolution time by 91% and saving 15 hours + $1k annually by digitizing annual billing."
        role="Salesforce Administrator/Developer + Digital Solutions Architect"
        location="Remote / Rockville, MD"
        dates="June ‘19 – Present"
        illustration={spcIllustration}
      />

      <Experience
        accentColor="#00A4CA"
        project="Middlesex Beach Association"
        description="Executed a 3-year community engagement campaign—resulting in 75% open rate across 77 messages—and increased owner profile database accuracy by 62%."
        role="Webmaster + Central Technology Consultant"
        location="Bethany Beach, DE"
        dates="Jan ‘17 – Jan ‘21"
        illustration={mbaIllustration}
      />

      <Experience
        accentColor="#27B2C7"
        project="Castello Ragazzi"
        description="Designed + built website and rental listing while managing guest correspondence, resulting in $12k of seasonal revenue and an average 5-star rating."
        role="Webmaster + Communications Officer"
        location="Bethany Beach, DE"
        dates="May ‘16 – July ‘18"
        illustration={crIllustration}
      />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "5rem",
});
