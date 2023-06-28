import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

import ExperienceTitle from "../components/experienceTitle";
import ExperienceBlock from "../components/ExperienceBlock";

import { EXPERIENCES, Experience } from "../data/experiences";

import photo from "../public/me.jpg";

import oasisLogo from "../public/logos/oasis.svg";
import kccsLogo from "../public/logos/kccs.svg";
import spcLogo from "../public/logos/spc.svg";
import tadpoleLogo from "../public/logos/tadpole.svg";
import tedxnuLogo from "../public/logos/tedxnu.svg";

import { styled } from "../stitches.config";

export default function Home() {
  const heroBlocks = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
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
            <Intro variants={heroBlock}>
              Full-stack developer with a passion for leveraging technology to
              enhance experiences.
            </Intro>

            <motion.p variants={heroBlock}>
              Jay is a rising third-year Computer Science + Business student at
              Northeastern University in Boston, MA and an incoming Digital
              Transformation and Technology Co-op at{" "}
              <a
                href="https://www.chick-fil-a.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chick-fil-A
              </a>{" "}
              🧑‍🍳.
            </motion.p>

            <motion.p variants={heroBlock}>
              This summer, he planned course curriculum + managed grading
              processes for 350 students in CS3500 (Object-Oriented Design) at{" "}
              <a
                href="https://www.khoury.northeastern.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Khoury
              </a>{" "}
              🎓. Jay also leads a team of 42 organizing interactive,
              multi-disciplinary events at{" "}
              <a
                href="https://tedxnortheasternu.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TEDxNU
              </a>{" "}
              🎙️.
            </motion.p>

            <motion.p variants={heroBlock}>
              Previously, he oversaw full-stack software development and product
              management at{" "}
              <a
                href="https://tadpoletutoring.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tadpole
              </a>{" "}
              📚, mentored students and crafted web dev resources for{" "}
              <a
                href="https://www.oasisneu.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oasis
              </a>{" "}
              🌴, and managed business-critical infrastructure at{" "}
              <a
                href="https://spcfinancial.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SPC Financial
              </a>{" "}
              💼.
            </motion.p>

            <motion.p variants={heroBlock}>
              Jay is a conscientious collaborator, punctilious problem-solver,
              and tenacious tinkerer who embraces challenges and loves charting
              new territory.
            </motion.p>

            <LogosSection variants={logos}>
              <LogosRow>
                <Image
                  src={kccsLogo}
                  alt="Khoury College of Computer Sciences"
                  height="30"
                />
                <Image src={tadpoleLogo} alt="Tadpole Tutoring" height="30" />
                <Image src={spcLogo} alt="SPC Financial" height="30" />
              </LogosRow>

              <LogosRow>
                <Image src={tedxnuLogo} alt="TEDxNU" height="30" />
                <Image src={oasisLogo} alt="Oasis" height="30" />
              </LogosRow>
            </LogosSection>
          </HeroRight>
        </HeroSectionGrid>
      </HeroSection>

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
    color: "$carrot",

    "&:hover": {
      "&:before": {
        color: "$carrot",
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
  marginBottom: "2.5rem",
  textWrap: "balance",
});

const LogosSection = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2.25rem",
  width: "100%",
  marginTop: "3rem",
  overflow: "auto",
});

const LogosRow = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "2rem",
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
  "@md": {
    svg: {
      position: "sticky",
      top: "5rem",
      left: 0,
    },
  },
});

const ExperiencesColumn = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  maxHeight: "min-content",
  color: "#E6F5FE",
});
