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
    slug: "khoury",
    company: "Khoury College of Computer Sciences",
    type: ExperienceType.PROFESSIONAL,
    location: "Boston, MA",
    locationType: LocationType.HYBRID,
    roles: [
      {
        title: "Curriculum Innovation Developer",
        startDate: moment({ year: 2024, month: 0 }).toDate(),
      },
      {
        title:
          "Technical Module Developer & Head Teaching Assistant, First-Year Seminar (CS 1200)",
        startDate: moment({ year: 2023, month: 5 }).toDate(),
        endDate: moment({ year: 2023, month: 11 }).toDate(),
      },
      {
        title: "Teaching Assistant",
        startDate: moment({ year: 2022, month: 8 }).toDate(),
        endDate: moment({ year: 2023, month: 5 }).toDate(),
      },
    ],
  },
  {
    slug: "cfa",
    company: "Chick-fil-A",
    type: ExperienceType.PROFESSIONAL,
    location: "Atlanta, GA",
    locationType: LocationType.HYBRID,
    roles: [
      {
        title: "Software Engineer (Co-Op)",
        startDate: moment({ year: 2023, month: 7 }).toDate(),
      },
    ],
  },
  {
    slug: "generate",
    company: "Generate",
    type: ExperienceType.COMMUNITY,
    location: "Boston, MA",
    locationType: LocationType.HYBRID,
    roles: [
      {
        title: "Operations Director",
        startDate: moment({ year: 2024, month: 3 }).toDate(),
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
        title: "Project Series Director",
        startDate: moment({ year: 2024, month: 0 }).toDate(),
        endDate: moment({ year: 2024, month: 3 }).toDate(),
      },
      {
        title: "Mentor & Resource Author",
        startDate: moment({ year: 2023, month: 0 }).toDate(),
        endDate: moment({ year: 2023, month: 3 }).toDate(),
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
        startDate: moment({ year: 2023, month: 4 }).toDate(),
        endDate: moment({ year: 2024, month: 3 }).toDate(),
      },
      {
        title: "Director of Operations",
        startDate: moment({ year: 2022, month: 9 }).toDate(),
        endDate: moment({ year: 2023, month: 4 }).toDate(),
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
        startDate: moment({ year: 2022, month: 9 }).toDate(),
        endDate: moment({ year: 2023, month: 3 }).toDate(),
      },
      {
        title: "Full-Stack Developer",
        startDate: moment({ year: 2022, month: 6 }).toDate(),
        endDate: moment({ year: 2022, month: 9 }).toDate(),
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
        startDate: moment({ year: 2022, month: 0 }).toDate(),
        endDate: moment({ year: 2023, month: 2 }).toDate(),
      },
      {
        title: "Digital Solutions Architect",
        startDate: moment({ year: 2019, month: 5 }).toDate(),
        endDate: moment({ year: 2023, month: 2 }).toDate(),
      },
      {
        title: "Marketing + Communications Intern",
        startDate: moment({ year: 2016, month: 2 }).toDate(),
        endDate: moment({ year: 2019, month: 5 }).toDate(),
      },
    ],
  },
  {
    slug: "miscellaneous",
    company: "Miscellaneous",
    roles: [
      {
        title: "BaySquared Consulting: Owner",
        startDate: moment({ year: 2021, month: 11 }).toDate(),
      },
      {
        title: "Middlesex Beach: Webmaster + Tech Consultant",
        startDate: moment({ year: 2017, month: 0 }).toDate(),
        endDate: moment({ year: 2021, month: 0 }).toDate(),
      },
      {
        title: "SED Center: Classroom Assistant",
        startDate: moment({ year: 2019, month: 9 }).toDate(),
        endDate: moment({ year: 2020, month: 3 }).toDate(),
      },
      {
        title: "Castello Ragazzi: Webmaster + Comms Officer",
        startDate: moment({ year: 2016, month: 0 }).toDate(),
        endDate: moment({ year: 2018, month: 0 }).toDate(),
      },
    ],
  },
];
