export enum ExperienceType {
  PROFESSIONAL = "Professional",
  COMMUNITY = "Community",
  PERSONAL = "Personal",
}

export enum LocationType {
  ON_SITE = "On-Site",
  HYBRID = "Hybrid",
  REMOTE = "Remote",
}

export type Experience = {
  slug: string;
  company: string;
  type: ExperienceType;
  location: string;
  locationType: LocationType;
  roles: Role[];
};

export type Role = {
  title: string;
  startDate: Date;
  endDate?: Date;
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "khoury",
    company: "Khoury College of Computer Sciences",
    type: ExperienceType.PROFESSIONAL,
    location: "Boston, MA",
    locationType: LocationType.HYBRID,
    roles: [
      {
        title: "Head Teaching Assistant, CS3500",
        startDate: new Date("May 2023"),
      },
      {
        title: "Teaching Assistant, CS2510",
        startDate: new Date("Jan 2023"),
        endDate: new Date("May 2023"),
      },
    ],
  },
  {
    slug: "tadpole",
    company: "Tadpole Tutoring",
    type: ExperienceType.PROFESSIONAL,
    location: "Derry, NH",
    locationType: LocationType.REMOTE,
    roles: [
      {
        title: "Lead Software Engineer + Product Manager",
        startDate: new Date("Oct 2022"),
        endDate: new Date("Apr 2023"),
      },
      {
        title: "Full-Stack Developer",
        startDate: new Date("Jul 2022"),
        endDate: new Date("Oct 2022"),
      },
    ],
  },
  {
    slug: "spc-financial",
    company: "SPC Financial",
    type: ExperienceType.PROFESSIONAL,
    location: "Rockville, MD",
    locationType: LocationType.HYBRID,
    roles: [
      {
        title: "Salesforce Administrator/Developer",
        startDate: new Date("Jan 2022"),
      },
      {
        title: "Digital Solutions Architect",
        startDate: new Date("Jun 2019"),
      },
      {
        title: "Marketing + Communications Intern",
        startDate: new Date("Mar 2016"),
        endDate: new Date("Jun 2019"),
      },
    ],
  },
  {
    slug: "tedxnu",
    company: "TEDxNU",
    type: ExperienceType.COMMUNITY,
    location: "Boston, MA",
    locationType: LocationType.HYBRID,
    roles: [
      {
        title: "Co-President",
        startDate: new Date("May 2023"),
      },
      {
        title: "Director of Operations",
        startDate: new Date("Oct 2022"),
        endDate: new Date("May 2023"),
      },
    ],
  },
  {
    slug: "oasis",
    company: "Oasis",
    type: ExperienceType.COMMUNITY,
    location: "Boston, MA",
    locationType: LocationType.ON_SITE,
    roles: [
      {
        title: "Mentor",
        startDate: new Date("Jan 2023"),
        endDate: new Date("Apr 2023"),
      },
    ],
  },
  {
    slug: "baysquared",
    company: "BaySquared Consulting",
    type: ExperienceType.PROFESSIONAL,
    location: "Maryland",
    locationType: LocationType.HYBRID,
    roles: [
      {
        title: "Owner",
        startDate: new Date("Dec 2021"),
      },
    ],
  },
];
