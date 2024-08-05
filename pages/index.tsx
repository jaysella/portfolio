import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

import ExperienceBlock from "../components/ExperienceBlock";
import ExperienceTitle from "../components/ExperienceTitle";

import { EXPERIENCES, Experience } from "../data/experiences";

import photo from "../public/me.jpg";

import bay2Logo from "../public/logos/bay2.svg";
import cfaLogo from "../public/logos/cfa.svg";
import kccsLogo from "../public/logos/kccs.svg";
import oasisLogo from "../public/logos/oasis.svg";
import spcLogo from "../public/logos/spc.svg";
import tadpoleLogo from "../public/logos/tadpole.svg";
import tedxLogo from "../public/logos/tedxnortheasternu.svg";

import highlights from "../public/illustrations/highlights.svg";

import { styled } from "../stitches.config";

export default function Home() {
  const LOGO_ROW_HEIGHT = 35;

  const heroBlocks = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.22,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const heroBlock = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
  };

  const logos = {
    visible: { opacity: 1, y: 0, transition: { delay: 2.5 } },
    hidden: { opacity: 0, y: 25 },
  };

  const sectionTitle = {
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
      <Head>
        <title>Jay Sella</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection>
        <HeroSectionGrid>
          <div>
            <Portrait
              initial={{ opacity: 0, scale: 0.25 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.35 }}
            >
              <Image
                src={photo}
                alt="me"
                width="115"
                height="115"
                placeholder="blur"
                style={{ objectFit: "cover" }}
              />
            </Portrait>

            <NameBlock>&#8627; Jay Sella</NameBlock>
          </div>

          <HeroRight initial="hidden" animate="visible" variants={heroBlocks}>
            <>
              <Intro variants={heroBlock}>
                Leveraging technology to enhance experiences.
              </Intro>

              <motion.p variants={heroBlock}>
                Jay is a fourth-year Computer Science and Business
                Administration student at{" "}
                <ExtLink href="https://www.northeastern.edu/">
                  Northeastern University
                </ExtLink>{" "}
                🎓 where he serves as Operations Director for its product
                development studio,{" "}
                <ExtLink href="https://generatenu.com">Generate</ExtLink> 🧰.
              </motion.p>

              <motion.p variants={heroBlock}>
                Recently, he served as a Cloud Platform Engineer during his
                second co-op rotation at{" "}
                <ExtLink href="https://www.chick-fil-a.com/">
                  Chick-fil-A
                </ExtLink>{" "}
                🐮 and as a Curriculum Innovation Developer for{" "}
                <ExtLink href="https://www.khoury.northeastern.edu/">
                  Khoury College
                </ExtLink>{" "}
                📒.
              </motion.p>

              <motion.p variants={heroBlock}>
                Previously, he oversaw a team of 52 as Co-President of{" "}
                <ExtLink href="https://tedxnortheasternu.com">
                  TEDxNortheasternU
                </ExtLink>{" "}
                🎙️, orchestrated a 100-student software project accelerator as
                Project Series Director of{" "}
                <ExtLink href="https://www.oasisneu.com">Oasis</ExtLink> 🌴, led
                software engineering at{" "}
                <a
                  href="https://tadpoletutoring.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tadpole
                </a>{" "}
                📚, and managed business-critical infrastructure for{" "}
                <ExtLink href="https://spcfinancial.com">SPC Financial</ExtLink>{" "}
                💼.
              </motion.p>

              <motion.p variants={heroBlock}>
                Jay is a conscientious collaborator, punctilious problem-solver,
                and tenacious tinkerer who embraces challenges and loves
                charting new territory.
              </motion.p>
            </>

            <LogosSection variants={logos}>
              <LogosRow>
                <Image
                  src={cfaLogo}
                  alt="Chick-fil-A"
                  height={LOGO_ROW_HEIGHT}
                />
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
              </LogosRow>

              <LogosRow>
                <Image
                  src={spcLogo}
                  alt="SPC Financial"
                  height={LOGO_ROW_HEIGHT}
                />
                <Image
                  src={tedxLogo}
                  alt="TEDxNortheasternU"
                  height={LOGO_ROW_HEIGHT / 2}
                />
                <Image
                  src={bay2Logo}
                  alt="BaySquared Consulting"
                  height={LOGO_ROW_HEIGHT}
                />
              </LogosRow>
            </LogosSection>
          </HeroRight>
        </HeroSectionGrid>
      </HeroSection>

      <HighlightsSection variants={logos}>
        <Image src={highlights} alt="Highlights" />
      </HighlightsSection>

      <Separator />

      <ExperienceSection>
        <StickyColumn>
          <ExperienceTitle variants={sectionTitle} />
        </StickyColumn>
        <ExperiencesColumn>
          {EXPERIENCES.map((e: Experience) => (
            <ExperienceBlock key={e.slug} experience={e} />
          ))}
        </ExperiencesColumn>
      </ExperienceSection>
    </>
  );
}

const ExtLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const HeroSection = styled("section", {
  marginX: "auto",
  paddingTop: "1.5rem",
  paddingBottom: "3.5rem",
  maxWidth: "47rem",
  paddingX: "1.5rem",
  color: "#E6F5FE",
  minHeight: "100vh",

  "@md": {
    paddingTop: "3.5rem",
    gridTemplateColumns: "min-content auto",
  },
});

const HeroSectionGrid = styled(motion.div, {
  display: "grid",
  gridTemplateColumns: "100%",
  width: "100%",
  gap: "2rem",

  "@md": {
    gridTemplateColumns: "min-content auto",
  },

  "@lg": {
    paddingY: "5rem",
  },

  a: {
    display: "inline-block",
    position: "relative",
    textDecoration: "none",
    zIndex: 2,
    color: "$blueScooter",

    "&:hover": {
      "&:before": {
        color: "$blueScooter",
        transition: "transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transformOrigin: "left",
        background:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B animation:wave 1s ease-in-out infinite alternate; animation-delay:-0.25s; stroke:%23c78027; stroke-width:2; stroke-linecap:square; %7D @keyframes wave%7B to%7B d:path('M 0 40 Q 20 42.5 40 40 Q 60 37.5 80 40'); %7D %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 37.5 40 40 Q 60 42.5 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E\")\n          0px 50% / 80px 80px repeat-x",
        animation: "waving 3s linear infinite",
        transform: "scaleX(1)",

        "@keyframes waving": {
          to: { backgroundPosition: "60px 50%, 160px 50%" },
        },
      },
    },

    "&:before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "30px",
      left: "0",
      bottom: "-15px",
      zIndex: -1,
      transform: "scaleX(0)",
      transition: "transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1)",
      transformOrigin: "right",
      background:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B stroke:%23c78027; stroke-width:2; stroke-linecap:square; %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 40 40 40 Q 60 40 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E\")\n        0px 50% / 80px 80px repeat-x",
    },
  },
});

const Portrait = styled(motion.div, {
  display: "flex",
  width: "max-content",
  borderRadius: "40px 8px 40px 8px",
  overflow: "hidden",
});

const NameBlock = styled("span", {
  display: "block",
  marginTop: "0.75rem",
  marginBottom: "1.25rem",
  marginLeft: "0.5rem",
  fontSize: "14px",
  color: "#95AAB7",
});

const HeroRight = styled(motion.div, {
  p: {
    fontSize: "clamp(1.02rem, 2.5vw, 1.2rem)",
    fontWeight: "400",
    lineHeight: "25px",

    "&:not(:last-of-type)": {
      marginBottom: "1.5rem",
    },

    "@md": {
      lineHeight: "29px",
    },
  },
});

const Intro = styled(motion.h1, {
  fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
  fontWeight: "700",
  marginTop: "0.75rem",
  marginBottom: "1.6rem",
  textWrap: "balance",
});

const LogosSection = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2.25rem",
  width: "100%",
  marginTop: "3.5rem",
  overflow: "auto",
});

const LogosRow = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2rem",
});

const HighlightsSection = styled(motion.div, {
  display: "none",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  marginBottom: "5rem",
  paddingX: "0.5rem",

  img: {
    maxWidth: "100%",
  },

  "@md": {
    display: "flex",
  },
  // marginTop: "3.5rem",
});

const Separator = styled("div", {
  width: "100%",
  height: "5px",
  backgroundColor: "$yellowCream",
});

const ExperienceSection = styled(motion.section, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "3rem 1.5rem",
  gap: "3rem",

  "@md": {
    padding: "3rem",
  },

  "@lg": {
    flexDirection: "row",
    padding: "5rem 4rem",
  },

  "@xl": {
    marginX: "auto",
    maxWidth: "72.5rem",
  },
});

const StickyColumn = styled("div", {
  svg: {
    maxWidth: "100%",

    "@md": {
      position: "sticky",
      top: "5rem",
      left: 0,
    },
  },
});

const ExperiencesColumn = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  gap: "3.5rem",
  maxHeight: "min-content",
  color: "#E6F5FE",
});
