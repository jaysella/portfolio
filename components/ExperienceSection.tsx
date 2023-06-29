import { motion } from "framer-motion";
import Image from "next/image";
import ExperienceBlock from "./ExperienceBlock";
import ExperienceTitle from "./ExperienceTitle";
import { EXPERIENCES, Experience } from "../data/experiences";
import { styled } from "../stitches.config";
import ExperienceSpotlight from "./ExperienceSpotlight";
import { Carousel, CarouselItem } from "./Carousel";

import bay2Logo from "../public/logos/bay2.svg";
import cfaLogo from "../public/logos/cfa.svg";
import oasisLogo from "../public/logos/oasis.svg";
import kccsLogo from "../public/logos/kccs.svg";
import spcLogo from "../public/logos/spc.svg";
import tadpoleLogo from "../public/logos/tadpole.svg";
import tedxnuLogo from "../public/logos/tedxnu.svg";

export default function ExperienceSection() {
  const LOGO_ROW_HEIGHT = 27;
  const logos = {
    visible: { opacity: 1, y: 0, transition: { delay: 2.5 } },
    hidden: { opacity: 0, y: 25 },
  };

  const titleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0.25 + i * 0.25;

      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.35, bounce: 0 },
          opacity: { delay, duration: 0.3 },
        },
      };
    },
  };

  return (
    <>
      <StickyColumn>
        <ExperienceTitle variants={titleVariants} />
        {/* <Carousel>
          <CarouselItem>
            <ExperienceSpotlight />
          </CarouselItem>
        </Carousel> */}

        <LogosSection variants={logos}>
          <LogosRow>
            <Image src={cfaLogo} alt="Chick-fil-A" height={LOGO_ROW_HEIGHT} />
            <Image
              src={kccsLogo}
              alt="Khoury College of Computer Sciences"
              height={LOGO_ROW_HEIGHT}
            />
            <Image src={oasisLogo} alt="Oasis" height={LOGO_ROW_HEIGHT} />
            <Image
              src={tadpoleLogo}
              alt="Tadpole Tutoring"
              height={LOGO_ROW_HEIGHT}
            />
            <Image src={spcLogo} alt="SPC Financial" height={LOGO_ROW_HEIGHT} />
            <Image src={tedxnuLogo} alt="TEDxNU" height={LOGO_ROW_HEIGHT} />
            <Image
              src={bay2Logo}
              alt="BaySquared Consulting"
              height={LOGO_ROW_HEIGHT}
            />
          </LogosRow>
        </LogosSection>
      </StickyColumn>
      <ExperiencesColumn>
        {EXPERIENCES.map((e: Experience) => (
          <ExperienceBlock key={e.slug} experience={e} />
        ))}
      </ExperiencesColumn>
    </>
  );
}

const StickyColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
  position: "sticky",
  top: "5rem",
  left: 0,
  height: "max-content",

  svg: {
    maxWidth: "100%",
  },

  "@lg": {
    maxWidth: "50%",
  },
});

const ExperiencesColumn = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  gap: "3.5rem",
  maxHeight: "min-content",
  color: "#E6F5FE",
});

const LogosSection = styled(motion.div, {
  display: "none",
  flexDirection: "column",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: "2.25rem",
  width: "100%",
  overflow: "auto",

  "@md": {
    display: "flex",
  },
});

const LogosRow = styled("div", {
  display: "none",
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: "2rem",

  "@md": {
    display: "flex",
  },
});
