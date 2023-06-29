import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "iconoir-react";
import tadpoleLogo from "../public/logos/tadpole.svg";
import { styled } from "../stitches.config";

export default function ExperienceSpotlight() {
  return (
    <Wrapper>
      <Image src={tadpoleLogo} alt="Tadpole Tutoring" height={25} />

      <p>
        Engineered front- and back-end systems in support of September 2022
        launch for 300+ users across 3 Boston-based educational organizations.
      </p>

      <Controls>
        <ControlsStack>
          <ArrowLeftCircle />
          <ArrowRightCircle />
        </ControlsStack>
      </Controls>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  border: "2px solid $gray",
  color: "$white",
  padding: "1.5rem 3.5rem 1.5rem 1.5rem",
  position: "sticky",
  top: 0,
  left: 0,
  borderRadius: "18px",

  img: {
    marginBottom: "1rem",
  },

  p: {
    textWrap: "balance",
  },
});

const Controls = styled("div", {
  position: "absolute",
  bottom: 0,
  right: 0,
  borderRadius: "18px 0 15px 0",
  backgroundColor: "$gray",
  padding: "0.65rem calc(0.65rem - 2px) calc(0.65rem - 2px) 0.65rem",
  color: "$blue",
});

const ControlsStack = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem;",
});
