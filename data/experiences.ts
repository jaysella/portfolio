import moment from "moment";

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
  //       startDate: moment("Aug 2023").toDate(),
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
        startDate: moment("May 2023").toDate(),
      },
      {
        title: "Teaching Assistant, CS2510",
        startDate: moment("Jan 2023").toDate(),
        endDate: moment("May 2023").toDate(),
      },
      {
        title: "Teaching Assistant, CS2500",
        startDate: moment("Sep 2022").toDate(),
        endDate: moment("Dec 2022").toDate(),
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
        startDate: moment("May 2023").toDate(),
      },
      {
        title: "Director of Operations",
        startDate: moment("Oct 2022").toDate(),
        endDate: moment("May 2023").toDate(),
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
  //       startDate: moment("Jan 2023").toDate(),
  //       endDate: moment("Apr 2023").toDate(),
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
        startDate: moment("Oct 2022").toDate(),
        endDate: moment("Apr 2023").toDate(),
      },
      {
        title: "Full-Stack Developer",
        startDate: moment("Jul 2022").toDate(),
        endDate: moment("Oct 2022").toDate(),
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
        startDate: moment("Jan 2022").toDate(),
        endDate: moment("Mar 2023").toDate(),
      },
      {
        title: "Digital Solutions Architect",
        startDate: moment("Jun 2019").toDate(),
        endDate: moment("Mar 2023").toDate(),
      },
      {
        title: "Marketing + Communications Intern",
        startDate: moment("Mar 2016").toDate(),
        endDate: moment("Jun 2019").toDate(),
      },
    ],
  },
  {
    slug: "miscellaneous",
    company: "Miscellaneous",
    roles: [
      {
        title: "BaySquared Consulting: Owner",
        startDate: moment("Dec 2021").toDate(),
      },
      {
        title: "Oasis: Mentor",
        startDate: moment("Jan 2023").toDate(),
        endDate: moment("Apr 2023").toDate(),
      },
      {
        title: "Middlesex Beach: Webmaster + Tech Consultant",
        startDate: moment("Jan 2017").toDate(),
        endDate: moment("Jan 2021").toDate(),
      },
      {
        title: "SED Center: Classroom Assistant",
        startDate: moment("Sep 2019").toDate(),
        endDate: moment("Mar 2020").toDate(),
      },
      {
        title: "Castello Ragazzi: Webmaster + Comms Officer",
        startDate: moment("Jan 2016").toDate(),
        endDate: moment("Jan 2018").toDate(),
      },
    ],
  },
];
