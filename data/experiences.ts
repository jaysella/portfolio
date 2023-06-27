export enum ExperienceType {
  PROFESSIONAL = "Professional",
  COMMUNITY = "Community",
  PERSONAL = "Personal",
}

export enum LocationType {
  ON_SITE = "On Site",
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
        startDate: new Date("2023-05"),
      },
      {
        title: "Teaching Assistant, CS2510",
        startDate: new Date("2023-01"),
        endDate: new Date("2023-05"),
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
        startDate: new Date("2022-10"),
        endDate: new Date("2023-04"),
      },
      {
        title: "Full-Stack Developer",
        startDate: new Date("2022-07"),
        endDate: new Date("2022-10"),
      },
    ],
  },
];
