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
  {
    slug: "cfa",
    company: "Chick-fil-A",
    type: ExperienceType.PROFESSIONAL,
    location: "Atlanta, GA",
    locationType: LocationType.HYBRID,
    roles: [
      {
        title: "Digital Transformation & Technology Co-Op",
        startDate: moment({ year: 2023, month: 7, day: 1 }).toDate(),
      },
    ],
  },
  {
    slug: "khoury",
    company: "Khoury College of Computer Sciences",
    type: ExperienceType.PROFESSIONAL,
    location: "Boston, MA",
    locationType: LocationType.HYBRID,
    roles: [
      {
        title: "Technical Module Developer, CS1200",
        startDate: moment({ year: 2023, month: 5, day: 1 }).toDate(),
      },
      {
        title: "Head Teaching Assistant, CS3500",
        startDate: moment({ year: 2023, month: 3, day: 1 }).toDate(),
        endDate: moment({ year: 2023, month: 5, day: 1 }).toDate(),
      },
      {
        title: "Teaching Assistant, CS2510",
        startDate: moment({ year: 2023, month: 0, day: 1 }).toDate(),
        endDate: moment({ year: 2023, month: 3, day: 1 }).toDate(),
      },
      {
        title: "Teaching Assistant, CS2500",
        startDate: moment({ year: 2022, month: 8, day: 1 }).toDate(),
        endDate: moment({ year: 2022, month: 11, day: 1 }).toDate(),
      },
    ],
  },
  {
    slug: "tedxnu",
    company: "TEDxNortheasternU",
    type: ExperienceType.COMMUNITY,
    location: "Boston, MA",
    locationType: LocationType.HYBRID,
    roles: [
      {
        title: "Co-President",
        startDate: moment({ year: 2023, month: 4, day: 1 }).toDate(),
      },
      {
        title: "Director of Operations",
        startDate: moment({ year: 2022, month: 9, day: 1 }).toDate(),
        endDate: moment({ year: 2023, month: 4, day: 1 }).toDate(),
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
  //       startDate: moment({year: 2023, month: 0, day: 1}).toDate(),
  //       endDate: moment({year: 2023, month: 3, day: 1}).toDate(),
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
        startDate: moment({ year: 2022, month: 9, day: 1 }).toDate(),
        endDate: moment({ year: 2023, month: 3, day: 1 }).toDate(),
      },
      {
        title: "Full-Stack Developer",
        startDate: moment({ year: 2022, month: 6, day: 1 }).toDate(),
        endDate: moment({ year: 2022, month: 9, day: 1 }).toDate(),
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
        startDate: moment({ year: 2022, month: 0, day: 1 }).toDate(),
        endDate: moment({ year: 2023, month: 2, day: 1 }).toDate(),
      },
      {
        title: "Digital Solutions Architect",
        startDate: moment({ year: 2019, month: 5, day: 1 }).toDate(),
        endDate: moment({ year: 2023, month: 2, day: 1 }).toDate(),
      },
      {
        title: "Marketing + Communications Intern",
        startDate: moment({ year: 2016, month: 2, day: 1 }).toDate(),
        endDate: moment({ year: 2019, month: 5, day: 1 }).toDate(),
      },
    ],
  },
  {
    slug: "miscellaneous",
    company: "Miscellaneous",
    roles: [
      {
        title: "BaySquared Consulting: Owner",
        startDate: moment({ year: 2021, month: 11, day: 1 }).toDate(),
      },
      {
        title: "Oasis: Mentor",
        startDate: moment({ year: 2023, month: 0, day: 1 }).toDate(),
        endDate: moment({ year: 2023, month: 3, day: 1 }).toDate(),
      },
      {
        title: "Middlesex Beach: Webmaster + Tech Consultant",
        startDate: moment({ year: 2017, month: 0, day: 1 }).toDate(),
        endDate: moment({ year: 2021, month: 0, day: 1 }).toDate(),
      },
      {
        title: "SED Center: Classroom Assistant",
        startDate: moment({ year: 2019, month: 9, day: 1 }).toDate(),
        endDate: moment({ year: 2020, month: 3, day: 1 }).toDate(),
      },
      {
        title: "Castello Ragazzi: Webmaster + Comms Officer",
        startDate: moment({ year: 2016, month: 0, day: 1 }).toDate(),
        endDate: moment({ year: 2018, month: 0, day: 1 }).toDate(),
      },
    ],
  },
];
