import { motion } from "framer-motion";
import { styled } from "../stitches.config";

export function Card({ children }) {
  return <WorkBlock>{children}</WorkBlock>;
}

export function CardHeader({ accentColor, children }) {
  return (
    <WorkIllustration style={{ backgroundColor: accentColor }}>
      {children}
    </WorkIllustration>
  );
}

export function CardContent({ children }) {
  return <WorkContent>{children}</WorkContent>;
}

const WorkBlock = styled("div", {
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "min-content",
  gridTemplateAreas: '"illustration" "content"',
  height: "100%",
  backgroundColor: "#012032",
  borderRadius: "40px 5px 40px 5px",
  overflow: "hidden",
});

const WorkContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "2rem 1.5rem",
  gridArea: "content",

  "@md": {
    padding: "2rem 2.5rem",
  },
});

const WorkIllustration = styled("div", {
  gridArea: "illustration",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 1.5rem",
  height: "15rem",

  "@md": {
    height: "17.5rem",
    padding: "2rem 2.5rem",
  },
});
