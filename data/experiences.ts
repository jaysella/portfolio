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
  type?: ExperienceType;
  location?: string;
  locationType?: LocationType;
  roles: Role[];
};

export type Role = {
  title: string;
  startDate: Date;
  endDate?: Date;
};

export const EXPERIENCES: Experience[] = [
  // {
  //   slug: "cfa",
  //   company: "Chick-fil-A",
  //   type: ExperienceType.PROFESSIONAL,
  //   location: "Atlanta, GA",
  //   locationType: LocationType.HYBRID,
  //   roles: [
  //     {
  //       title: "Digital Transformation & Technology Co-Op",
  //       startDate: new Date("Aug 2023"),
  //     },
  //   ],
  // },
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
      {
        title: "Teaching Assistant, CS2500",
        startDate: new Date("Sep 2022"),
        endDate: new Date("Dec 2022"),
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
  // {
  //   slug: "oasis",
  //   company: "Oasis",
  //   type: ExperienceType.COMMUNITY,
  //   location: "Boston, MA",
  //   locationType: LocationType.ON_SITE,
  //   roles: [
  //     {
  //       title: "Mentor",
  //       startDate: new Date("Jan 2023"),
  //       endDate: new Date("Apr 2023"),
  //     },
  //   ],
  // },
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
        endDate: new Date("Mar 2023"),
      },
      {
        title: "Digital Solutions Architect",
        startDate: new Date("Jun 2019"),
        endDate: new Date("Mar 2023"),
      },
      {
        title: "Marketing + Communications Intern",
        startDate: new Date("Mar 2016"),
        endDate: new Date("Jun 2019"),
      },
    ],
  },
  {
    slug: "miscellaneous",
    company: "Miscellaneous",
    roles: [
      {
        title: "BaySquared Consulting: Owner",
        startDate: new Date("Dec 2021"),
      },
      {
        title: "Oasis: Mentor",
        startDate: new Date("Jan 2023"),
        endDate: new Date("Apr 2023"),
      },
      {
        title: "Middlesex Beach: Webmaster + Tech Consultant",
        startDate: new Date("Jan 2017"),
        endDate: new Date("Jan 2021"),
      },
      {
        title: "SED Center: Classroom Assistant",
        startDate: new Date("Sep 2019"),
        endDate: new Date("Mar 2020"),
      },
      {
        title: "Castello Ragazzi: Webmaster + Comms Officer",
        startDate: new Date("Jan 2016"),
        endDate: new Date("Jan 2018"),
      },
    ],
  },
];
