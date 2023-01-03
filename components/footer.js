import { styled } from "../stitches.config";

export default function Footer() {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} Jay Sella &#183; All Rights Reserved
      </p>

      <p>
        Animated underlines inspired by{" "}
        <a
          href="https://codepen.io/cobra_winfrey/pen/zYKGePx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adam Kuhn &#8599;
        </a>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled("footer", {
  display: "flex",
  flexDirection: "column",
  paddingY: "2rem",
  borderTop: "1px solid $carrot",
  color: "$carrot",
  justifyContent: "center",
  alignItems: "center",

  p: {
    "&:not(:last-of-type)": {
      marginBottom: "0.25rem",
    },

    a: {
      transition: "border 0.075s ease-in-out",

      "&:hover": {
        borderBottom: "1px solid",
      },
    },
  },
});
