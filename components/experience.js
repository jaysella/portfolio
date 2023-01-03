import { BackpackIcon, ClockIcon, GlobeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";

import { styled } from "../stitches.config";

export default function Experience({
  accentColor,
  project,
  description,
  role,
  location,
  dates,
  illustration,
  logo,
}) {
  return (
    <Wrapper
      style={{ "--experience-accent-color": accentColor }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          scale: { type: "spring", duration: 0.625, bounce: 0.25 },
        },
      }}
      viewport={{ once: true }}
    >
      <Illustration>
        <Image src={illustration} alt="Illustration" draggable={false} />
      </Illustration>

      <Info>
        <Project>{project}</Project>

        <Meta>
          <Description>{description}</Description>
        </Meta>

        <Details>
          <Detail>
            <BackpackIcon aria-label="role" /> {role}
          </Detail>

          <Detail>
            <GlobeIcon aria-label="location" /> {location}
          </Detail>

          <Detail>
            <ClockIcon aria-label="timeframe" /> {dates}
          </Detail>
        </Details>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled(motion.section, {
  display: "grid",
  gridTemplateColumns: "100%",
  alignItems: "center",
  marginX: "auto",
  paddingX: "2.5rem",

  "@md": {
    gridTemplateColumns: "35% auto",
    gap: "2.5rem",
  },

  "@lg": {
    gridTemplateColumns: "32.5% auto",
    gap: "2.5rem",
  },

  "@xl": {
    gridTemplateColumns: "30% auto",
    width: "min(100%, 1325px)",
    gap: "4rem",
  },
});

const Illustration = styled(motion.div, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "15rem",
  padding: "2rem",
  backgroundColor: "var(--experience-accent-color)",
  borderRadius: "40px 10px 40px 10px",

  img: {
    width: "100%",
    height: "100%",
  },

  "@md": {
    paddingY: "2.5rem",
  },
});

const Info = styled("div", {
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateAreas: '"project" "meta" "details"',
  gridTemplateRows: "min-content",
  alignContent: "center",
  marginTop: "1.5rem",
  paddingX: "0.25rem",
  gap: "0",

  "@md": {
    gridTemplateColumns: "100%",
    gridTemplateAreas: "project meta details",
    columnGap: "2.5rem",
    marginTop: "0",
    paddingX: "0",
  },

  "@lg": {
    gridTemplateColumns: "57.5% auto",
    gridTemplateAreas: '"project ." "meta details"',
    columnGap: "3rem",
  },

  "@xl": {
    gridTemplateColumns: "42.5% auto",
    columnGap: "5rem",
  },
});

const Project = styled("h3", {
  gridArea: "project",
  marginBottom: "1rem",
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  fontWeight: "700",
});

const Meta = styled("div", {
  gridArea: "meta",
});

const Description = styled("p", {
  fontSize: "clamp(1.02rem, 2vw, 1.1rem)",
  fontWeight: "300",
  lineHeight: "24px",
});

const Logo = styled("div", {
  display: "none",
  marginTop: "2.75rem",

  "@lg": {
    display: "block",
  },
});

const Details = styled("div", {
  gridArea: "details",
  display: "flex",
  flexDirection: "column",
  gap: "0.675rem",
  marginTop: "1.75rem",

  "@lg": {
    marginTop: "0",
  },
});

const Detail = styled("div", {
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",

  svg: {
    width: "18px",
    height: "auto",
    color: "#95AAB7",
    flexShrink: "0",
  },
});
