import { Experience, ExperienceType } from "../data/experiences";
import { styled } from "../stitches.config";

import moment from "moment";

export default function ExperienceBlock({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <Block>
      <BlockHeader>
        {experience.location || experience.type ? (
          <div>
            {experience.location}
            {experience.type !== ExperienceType.PROFESSIONAL && (
              <span> &bull; {experience.type}</span>
            )}
          </div>
        ) : null}
        <h3>{experience.company}</h3>
      </BlockHeader>

      <BlockBody>
        <ul>
          {experience.roles.map((r, i) => (
            <li key={i}>
              <div>
                {r.title}
                {!r.endDate ? (
                  <CurrentIndicator>&bull;</CurrentIndicator>
                ) : null}
              </div>
              <RoleDates>
                {moment(r.startDate).format("MMM 'YY")} —{" "}
                {r.endDate ? moment(r.endDate).format("MMM 'YY") : "Present"}
              </RoleDates>
            </li>
          ))}
        </ul>
      </BlockBody>
    </Block>
  );
}

const Block = styled("div", {
  color: "$white",
});

const BlockHeader = styled("header", {
  paddingBottom: "20px",

  div: {
    textTransform: "uppercase",
    fontWeight: "$bold",
  },

  span: {
    color: "$gray",
  },

  h3: {
    color: "$yellowCream",
    fontSize: "1.625rem",
    lineHeight: "1.8125rem",
    maxWidth: "15rem",
    textWrap: "balance",
  },
});

const BlockBody = styled("div", {
  ul: {
    listStyle: "none",

    li: {
      padding: "0.375rem 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "1rem",
      maxWidth: "33rem",

      "&:first-of-type": {
        alignItems: "flex-end",
      },
      "&:last-of-type": {
        alignItems: "flex-start",
      },

      div: {
        textWrap: "balance",
      },
    },

    "li + li": {
      borderTop: "1px solid $gray",
    },
  },
});

const CurrentIndicator = styled("span", {
  color: "$carrot",
  fontWeight: "$bold",
  marginLeft: "0.375rem",
});

const RoleDates = styled("span", {
  color: "$gray",
  whiteSpace: "nowrap",
});
