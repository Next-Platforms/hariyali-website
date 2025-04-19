// Header Config
export const Header_Config = {
  header: {
    logo: {
      imageUrl: "/logo.webp",
      alt: "Hariyali",
      href: "/",
    },
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "The Mission",
        href: "/the-mission",
      },
      {
        title: "Team",
        href: "/the-team",
      },
      {
        title: "Partners",
        href: "#",
      },
      {
        title: "Contact",
        href: "/#contact",
      },
    ],
    button: {
      title: "Join Us",
      href: "#",
    },
    mobileMenuText: "Menu",
  },
};
export type THeader = typeof Header_Config;

// Footer Config
export const Footer_Config = {
  footer: {
    logo: {
      imageUrl: "/logo.webp",
      alt: "Hariyali",
      href: "/",
      logoText: "Hariyali",
    },
    socialLinks: [
      {
        title: "Facebook",
        href: "#",
        icon: {
          imageUrl: "/fb.png",
        },
      },
      {
        title: "Instagram",
        href: "#",
        icon: {
          imageUrl: "ig.png",
        },
      },
      {
        title: "Twitter",
        href: "#",
        icon: {
          imageUrl: "x.png",
        },
      },
      {
        title: "LinkedIn",
        href: "#",
        icon: {
          imageUrl: "li.png",
        },
      },
      {
        title: "YouTube",
        href: "#",
        icon: {
          imageUrl: "yt.png",
        },
      },
    ],
    inputField: {
      placeholder: "Enter your email",
      buttonText: "Submit",
    },
    linkSections: [
      {
        title: "Site Map",
        links: [
          {
            title: "Home",
            href: "/",
          },
          {
            title: "The Mission",
            href: "/the-mission",
          },
          {
            title: "Team",
            href: "/the-team",
          },
          {
            title: "Partners",
            href: "#",
          },
          {
            title: "Contact",
            href: "/#contact",
          },
        ],
      },
      {
        title: "Legal",
        links: [
          {
            title: "Privacy Policy",
            href: "#",
          },
          {
            title: "Terms of Service",
            href: "#",
          },
        ],
      },
      {
        title: "Contact",
        links: [
          {
            title: "Email",
            href: "mailto:abcd@gmail.com",
          },
          {
            title: "Phone",
            href: "tel:1234567890",
          },
        ],
      },
    ],
  },
};
export type TFooter = typeof Footer_Config;

// Home Page Config
export const Home_Config = {
  hero: {
    title: "Mera Ped Meri Pehchaan",
    description:
      "An initiative that is history in the making. The world's first grassroots organized Tree Adoption Campaign. ",
    button1: {
      title: "Join Now",
      href: "#",
    },
    button2: {
      title: "Know More",
      href: "#",
    },
    cardOne: {
      imageUrl: "/hero-1.jpeg",
      text: "Don't just plant, Adopt",
    },
    cardTwo: {
      imageUrl: "/hero-2.jpeg",
      text: "A rapidly expanding initiative across Maharashtra & Telangana",
    },
    cardThree: {
      imageUrl: "/hero-3.jpeg",
      text: "Mission Hariyali 2025, is a non-profit initiative launched with the aim of creating sustainable greenery across India.",
    },
    background: {
      imageUrl: "/hero-bg.jpeg",
      alt: "Hero Background",
    },
  },
  notices: {
    id: "notices",
    title: "Notices",
    notices: [
      {
        title: "Notice 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        href: "#",
      },
      {
        title: "Notice 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        href: "#",
      },
      {
        title: "Notice 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        href: "#",
      },
      {
        title: "Notice 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        href: "#",
      },
    ],
  },
  about: {
    id: "about",
    title: "About",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    specialCard: {
      imageUrl: "/about-us-3.png",
      title: "2000+",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    cardOne: {
      imageUrl: "/about-us-1.jpeg",
      text: "Lorem Ipsum Dolor Sit Amet, consecteur elit.",
    },
    cardTwo: {
      imageUrl: "/about-us-2.jpeg",
      text: "Lorem Ipsum Dolor Sit Amet, consecteur elit.",
    },
    cardThree: {
      imageUrl: "/about-us-4.jpeg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    },
  },
  team: {
    id: "team",
    title: "Meet Out Team",
    subTitle: "OUR TEAM",
    description:
      "We are a team of dedicated volunteers who are passionate about making a difference in the lives of others.",
    teamMembers: [
      {
        profilePicture: {
          imageUrl: "/women.jpeg",
        },
        name: "Sdr. Yogi Gurpreet Singh",
        position: "Project Head",
        description: "Intro of sir",
        socialLinks: [
          {
            title: "Facebook",
            href: "#",
            icon: {
              imageUrl: "/fb.png",
            },
          },
          {
            title: "Instagram",
            href: "#",
            icon: {
              imageUrl: "ig.png",
            },
          },
          {
            title: "Twitter",
            href: "#",
            icon: {
              imageUrl: "x.png",
            },
          },
          {
            title: "LinkedIn",
            href: "#",
            icon: {
              imageUrl: "li.png",
            },
          },
          {
            title: "YouTube",
            href: "#",
            icon: {
              imageUrl: "yt.png",
            },
          },
        ],
      },
      {
        profilePicture: {
          imageUrl: "/women.jpeg",
        },
        name: "Dr. Jaichand",
        position: "Principal Advisor",
        description: "Intro of sir",
        socialLinks: [
          {
            title: "Facebook",
            href: "#",
            icon: {
              imageUrl: "/fb.png",
            },
          },
          {
            title: "Instagram",
            href: "#",
            icon: {
              imageUrl: "ig.png",
            },
          },
          {
            title: "Twitter",
            href: "#",
            icon: {
              imageUrl: "x.png",
            },
          },
          {
            title: "LinkedIn",
            href: "#",
            icon: {
              imageUrl: "li.png",
            },
          },
          {
            title: "YouTube",
            href: "#",
            icon: {
              imageUrl: "yt.png",
            },
          },
        ],
      },
      {
        profilePicture: {
          imageUrl: "/women.jpeg",
        },
        name: "Dr. Sangeeta Dongre",
        position: "Maharashtra Head Co-ordinator",
        description: "Intro of ma'am",
        socialLinks: [
          {
            title: "Facebook",
            href: "#",
            icon: {
              imageUrl: "/fb.png",
            },
          },
          {
            title: "Instagram",
            href: "#",
            icon: {
              imageUrl: "ig.png",
            },
          },
          {
            title: "Twitter",
            href: "#",
            icon: {
              imageUrl: "x.png",
            },
          },
          {
            title: "LinkedIn",
            href: "#",
            icon: {
              imageUrl: "li.png",
            },
          },
          {
            title: "YouTube",
            href: "#",
            icon: {
              imageUrl: "yt.png",
            },
          },
        ],
      },
    ],
    otherMembers: [
      {
        Title: "Volunteers",
        value: "2000+",
      },
      {
        Title: "Trees Planted",
        value: "2000+",
      },
      {
        Title: "Projects",
        value: "2000+",
      },
      {
        Title: "Partners",
        value: "2000+",
      },
    ],
  },
  volunteer: {
    id: "volunteer",
    title: {
      lineOne: "Join The Cause,",
      lineTwo: "Volunteer For Us.",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button: {
      title: "Enroll Now",
      href: "#",
    },
    cardOne: {
      title:
        "Become a part of the thousands of Volunteers across the entire nation.",
      indiaMap: {
        imageUrl: "/india-map.png",
      },
      description:
        "We are building a greener India with working spanning across multiple states.",
    },
    cardTwo: {
      image: {
        imageUrl: "/cause-1.jpeg",
      },
      points: [
        {
          title: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        },
        {
          title: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        },
        {
          title: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        },
      ],
    },
  },
  testimonials: {
    id: "testimonials",
    title: "Testimonials",
    testimonials: [
      {
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c",
      },
      {
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c",
      },
      {
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c",
      },
      {
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c",
      },
      {
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c",
      },
      {
        videoUrl: "https://www.youtube.com/embed/K4DyBUG242c",
      },
    ],
  },
  contact: {
    id: "contact",
    title: "Contact",
    formSubmitButtonText: "Submit",
  },
};
export type THome = typeof Home_Config;

// The Mission Page Config
export const TheMission_Config = {
  hero: {
    title: "The Mission",
    descriptions: ["Get to know our “Why”"],
    bgImage: "/mission-hero-bg.jpeg",
    button: {
      title: "Join Us",
      href: "#",
    },
  },
  ourMission: {
    title: "Our Mission",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    image: {
      imageUrl: "/mission-1.jpeg",
    },
  },
  ourJourney: {
    title: "Our Journey",
    journeys: [
      {
        date: "01/01/1948",
        description:
          "'Mera Ped Mera Pehchaan' is an environmental sustainability initiative that focuses on real-time tracking and public engagement.",
        image: {
          imageUrl: "",
        },
      },
      {
        date: "01/01/1990",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do aceiusmod tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        image: {
          imageUrl: "/mission-2.jpeg",
        },
      },
      {
        date: "01/01/1990",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do aceiusmod tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        image: {
          imageUrl: "",
        },
      },
      {
        date: "01/01/1990",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do aceiusmod tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        image: {
          imageUrl: "",
        },
      },
    ],
  },
};
export type TTheMission = typeof TheMission_Config;

// The Team Page Config
export const TheTeam_Config = {
  hero: {
    title: "The Team",
    descriptions: [
      "Get to know the people behind Hariyali.",
      "We always welcome new volunteers and supporters for the cause.",
    ],
    bgImage: "/team-hero-bg.jpeg",
    button: {
      title: "Join Us",
      href: "#",
    },
  },
  team: {
    title: "Meet Out Team",
    subTitle: "OUR TEAM",
    description:
      "We are a team of dedicated volunteers who are passionate about making a difference in the lives of others.",
    teamMembers: [
      {
        profilePicture: {
          imageUrl: "/women.jpeg",
        },
        name: "Sdr. Yogi Gurpreet Singh",
        position: "Project Head",
        description: "Intro of sir",
        socialLinks: [
          {
            title: "Facebook",
            href: "#",
            icon: {
              imageUrl: "/fb.png",
            },
          },
          {
            title: "Instagram",
            href: "#",
            icon: {
              imageUrl: "ig.png",
            },
          },
          {
            title: "Twitter",
            href: "#",
            icon: {
              imageUrl: "x.png",
            },
          },
          {
            title: "LinkedIn",
            href: "#",
            icon: {
              imageUrl: "li.png",
            },
          },
          {
            title: "YouTube",
            href: "#",
            icon: {
              imageUrl: "yt.png",
            },
          },
        ],
      },
      {
        profilePicture: {
          imageUrl: "/women.jpeg",
        },
        name: "Dr. Jaichand",
        position: "Principal Advisor",
        description: "Intro of sir",
        socialLinks: [
          {
            title: "Facebook",
            href: "#",
            icon: {
              imageUrl: "/fb.png",
            },
          },
          {
            title: "Instagram",
            href: "#",
            icon: {
              imageUrl: "ig.png",
            },
          },
          {
            title: "Twitter",
            href: "#",
            icon: {
              imageUrl: "x.png",
            },
          },
          {
            title: "LinkedIn",
            href: "#",
            icon: {
              imageUrl: "li.png",
            },
          },
          {
            title: "YouTube",
            href: "#",
            icon: {
              imageUrl: "yt.png",
            },
          },
        ],
      },
      {
        profilePicture: {
          imageUrl: "/women.jpeg",
        },
        name: "Dr. Sangeeta Dongre",
        position: "Maharashtra Head Co-ordinator",
        description: "Intro of ma'am",
        socialLinks: [
          {
            title: "Facebook",
            href: "#",
            icon: {
              imageUrl: "/fb.png",
            },
          },
          {
            title: "Instagram",
            href: "#",
            icon: {
              imageUrl: "ig.png",
            },
          },
          {
            title: "Twitter",
            href: "#",
            icon: {
              imageUrl: "x.png",
            },
          },
          {
            title: "LinkedIn",
            href: "#",
            icon: {
              imageUrl: "li.png",
            },
          },
          {
            title: "YouTube",
            href: "#",
            icon: {
              imageUrl: "yt.png",
            },
          },
        ],
      },
    ],
  },
  presence: {
    title: "Our Presence",
    subTitle: "PRESENCE",
    description: "We are available across the entire nation.",
    districts: [
      {
        districtName: "District 1",
        table: {
          columns: [
            {
              title: "Name",
              icon: {
                imageUrl: "/icons/name.svg",
              },
            },
            {
              title: "Title",
              icon: {
                imageUrl: "/icons/title.svg",
              },
            },
            {
              title: "Profession",
              icon: {
                imageUrl: "/icons/profession.svg",
              },
            },
            {
              title: "Fields Helping In",
              icon: {
                imageUrl: "/icons/fields-helping-in.svg",
              },
            },
            {
              title: "Trees Adopted",
              icon: {
                imageUrl: "/icons/trees-adopted.svg",
              },
            },
          ],
          rows: [
            {
              name: "Name 1",
              title: "Title 1",
              profession: "Student 1",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 2",
              title: "Title 2",
              profession: "Student 2",
              fieldsHelpingIn: ["1", "2"],
              treesAdopted: "50",
            },
            {
              name: "Name 3",
              title: "Title 3",
              profession: "Student 3",
              fieldsHelpingIn: ["1"],
              treesAdopted: "25",
            },
            {
              name: "Name 4",
              title: "Title 4",
              profession: "Student 4",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 5",
              title: "Title 5",
              profession: "Student 5",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 6",
              title: "Title 6",
              profession: "Student 6",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 7",
              title: "Title 7",
              profession: "Student 7",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 8",
              title: "Title 8",
              profession: "Student 8",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 9",
              title: "Title 9",
              profession: "Student 9",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 10",
              title: "Title 10",
              profession: "Student 10",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 11",
              title: "Title 11",
              profession: "Student 11",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 12",
              title: "Title 12",
              profession: "Student 12",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
          ],
        },
      },
      {
        districtName: "District 2",
        table: {
          columns: [
            {
              title: "Name",
              icon: {
                imageUrl: "/icons/name.svg",
              },
            },
            {
              title: "Title",
              icon: {
                imageUrl: "/icons/title.svg",
              },
            },
            {
              title: "Profession",
              icon: {
                imageUrl: "/icons/profession.svg",
              },
            },
            {
              title: "Fields Helping In",
              icon: {
                imageUrl: "/icons/fields-helping-in.svg",
              },
            },
            {
              title: "Trees Adopted",
              icon: {
                imageUrl: "/icons/trees-adopted.svg",
              },
            },
          ],
          rows: [
            {
              name: "Name 1",
              title: "Title 1",
              profession: "Student 1",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 2",
              title: "Title 2",
              profession: "Student 2",
              fieldsHelpingIn: ["1", "2"],
              treesAdopted: "50",
            },
            {
              name: "Name 3",
              title: "Title 3",
              profession: "Student 3",
              fieldsHelpingIn: ["1"],
              treesAdopted: "25",
            },
            {
              name: "Name 4",
              title: "Title 4",
              profession: "Student 4",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
          ],
        },
      },
      {
        districtName: "District 3",
        table: {
          columns: [
            {
              title: "Name",
              icon: {
                imageUrl: "/icons/name.svg",
              },
            },
            {
              title: "Title",
              icon: {
                imageUrl: "/icons/title.svg",
              },
            },
            {
              title: "Profession",
              icon: {
                imageUrl: "/icons/profession.svg",
              },
            },
            {
              title: "Fields Helping In",
              icon: {
                imageUrl: "/icons/fields-helping-in.svg",
              },
            },
            {
              title: "Trees Adopted",
              icon: {
                imageUrl: "/icons/trees-adopted.svg",
              },
            },
          ],
          rows: [
            {
              name: "Name 1",
              title: "Title 1",
              profession: "Student 1",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 2",
              title: "Title 2",
              profession: "Student 2",
              fieldsHelpingIn: ["1", "2"],
              treesAdopted: "50",
            },
            {
              name: "Name 3",
              title: "Title 3",
              profession: "Student 3",
              fieldsHelpingIn: ["1"],
              treesAdopted: "25",
            },
            {
              name: "Name 4",
              title: "Title 4",
              profession: "Student 4",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
          ],
        },
      },
      {
        districtName: "District 4",
        table: {
          columns: [
            {
              title: "Name",
              icon: {
                imageUrl: "/icons/name.svg",
              },
            },
            {
              title: "Title",
              icon: {
                imageUrl: "/icons/title.svg",
              },
            },
            {
              title: "Profession",
              icon: {
                imageUrl: "/icons/profession.svg",
              },
            },
            {
              title: "Fields Helping In",
              icon: {
                imageUrl: "/icons/fields-helping-in.svg",
              },
            },
            {
              title: "Trees Adopted",
              icon: {
                imageUrl: "/icons/trees-adopted.svg",
              },
            },
          ],
          rows: [
            {
              name: "Name 1",
              title: "Title 1",
              profession: "Student 1",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 2",
              title: "Title 2",
              profession: "Student 2",
              fieldsHelpingIn: ["1", "2"],
              treesAdopted: "50",
            },
            {
              name: "Name 3",
              title: "Title 3",
              profession: "Student 3",
              fieldsHelpingIn: ["1"],
              treesAdopted: "25",
            },
            {
              name: "Name 4",
              title: "Title 4",
              profession: "Student 4",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
          ],
        },
      },
      {
        districtName: "District 5",
        table: {
          columns: [
            {
              title: "Name",
              icon: {
                imageUrl: "/icons/name.svg",
              },
            },
            {
              title: "Title",
              icon: {
                imageUrl: "/icons/title.svg",
              },
            },
            {
              title: "Profession",
              icon: {
                imageUrl: "/icons/profession.svg",
              },
            },
            {
              title: "Fields Helping In",
              icon: {
                imageUrl: "/icons/fields-helping-in.svg",
              },
            },
            {
              title: "Trees Adopted",
              icon: {
                imageUrl: "/icons/trees-adopted.svg",
              },
            },
          ],
          rows: [
            {
              name: "Name 1",
              title: "Title 1",
              profession: "Student 1",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 2",
              title: "Title 2",
              profession: "Student 2",
              fieldsHelpingIn: ["1", "2"],
              treesAdopted: "50",
            },
            {
              name: "Name 3",
              title: "Title 3",
              profession: "Student 3",
              fieldsHelpingIn: ["1"],
              treesAdopted: "25",
            },
            {
              name: "Name 4",
              title: "Title 4",
              profession: "Student 4",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
          ],
        },
      },
      {
        districtName: "District 6",
        table: {
          columns: [
            {
              title: "Name",
              icon: {
                imageUrl: "/icons/name.svg",
              },
            },
            {
              title: "Title",
              icon: {
                imageUrl: "/icons/title.svg",
              },
            },
            {
              title: "Profession",
              icon: {
                imageUrl: "/icons/profession.svg",
              },
            },
            {
              title: "Fields Helping In",
              icon: {
                imageUrl: "/icons/fields-helping-in.svg",
              },
            },
            {
              title: "Trees Adopted",
              icon: {
                imageUrl: "/icons/trees-adopted.svg",
              },
            },
          ],
          rows: [
            {
              name: "Name 1",
              title: "Title 1",
              profession: "Student 1",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 2",
              title: "Title 2",
              profession: "Student 2",
              fieldsHelpingIn: ["1", "2"],
              treesAdopted: "50",
            },
            {
              name: "Name 3",
              title: "Title 3",
              profession: "Student 3",
              fieldsHelpingIn: ["1"],
              treesAdopted: "25",
            },
            {
              name: "Name 4",
              title: "Title 4",
              profession: "Student 4",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
          ],
        },
      },
      {
        districtName: "District 7",
        table: {
          columns: [
            {
              title: "Name",
              icon: {
                imageUrl: "/icons/name.svg",
              },
            },
            {
              title: "Title",
              icon: {
                imageUrl: "/icons/title.svg",
              },
            },
            {
              title: "Profession",
              icon: {
                imageUrl: "/icons/profession.svg",
              },
            },
            {
              title: "Fields Helping In",
              icon: {
                imageUrl: "/icons/fields-helping-in.svg",
              },
            },
            {
              title: "Trees Adopted",
              icon: {
                imageUrl: "/icons/trees-adopted.svg",
              },
            },
          ],
          rows: [
            {
              name: "Name 1",
              title: "Title 1",
              profession: "Student 1",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 2",
              title: "Title 2",
              profession: "Student 2",
              fieldsHelpingIn: ["1", "2"],
              treesAdopted: "50",
            },
            {
              name: "Name 3",
              title: "Title 3",
              profession: "Student 3",
              fieldsHelpingIn: ["1"],
              treesAdopted: "25",
            },
            {
              name: "Name 4",
              title: "Title 4",
              profession: "Student 4",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
          ],
        },
      },
      {
        districtName: "District 8",
        table: {
          columns: [
            {
              title: "Name",
              icon: {
                imageUrl: "/icons/name.svg",
              },
            },
            {
              title: "Title",
              icon: {
                imageUrl: "/icons/title.svg",
              },
            },
            {
              title: "Profession",
              icon: {
                imageUrl: "/icons/profession.svg",
              },
            },
            {
              title: "Fields Helping In",
              icon: {
                imageUrl: "/icons/fields-helping-in.svg",
              },
            },
            {
              title: "Trees Adopted",
              icon: {
                imageUrl: "/icons/trees-adopted.svg",
              },
            },
          ],
          rows: [
            {
              name: "Name 1",
              title: "Title 1",
              profession: "Student 1",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 2",
              title: "Title 2",
              profession: "Student 2",
              fieldsHelpingIn: ["1", "2"],
              treesAdopted: "50",
            },
            {
              name: "Name 3",
              title: "Title 3",
              profession: "Student 3",
              fieldsHelpingIn: ["1"],
              treesAdopted: "25",
            },
            {
              name: "Name 4",
              title: "Title 4",
              profession: "Student 4",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
          ],
        },
      },
      {
        districtName: "District 9",
        table: {
          columns: [
            {
              title: "Name",
              icon: {
                imageUrl: "/icons/name.svg",
              },
            },
            {
              title: "Title",
              icon: {
                imageUrl: "/icons/title.svg",
              },
            },
            {
              title: "Profession",
              icon: {
                imageUrl: "/icons/profession.svg",
              },
            },
            {
              title: "Fields Helping In",
              icon: {
                imageUrl: "/icons/fields-helping-in.svg",
              },
            },
            {
              title: "Trees Adopted",
              icon: {
                imageUrl: "/icons/trees-adopted.svg",
              },
            },
          ],
          rows: [
            {
              name: "Name 1",
              title: "Title 1",
              profession: "Student 1",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 2",
              title: "Title 2",
              profession: "Student 2",
              fieldsHelpingIn: ["1", "2"],
              treesAdopted: "50",
            },
            {
              name: "Name 3",
              title: "Title 3",
              profession: "Student 3",
              fieldsHelpingIn: ["1"],
              treesAdopted: "25",
            },
            {
              name: "Name 4",
              title: "Title 4",
              profession: "Student 4",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
          ],
        },
      },
      {
        districtName: "District 10",
        table: {
          columns: [
            {
              title: "Name",
              icon: {
                imageUrl: "/icons/name.svg",
              },
            },
            {
              title: "Title",
              icon: {
                imageUrl: "/icons/title.svg",
              },
            },
            {
              title: "Profession",
              icon: {
                imageUrl: "/icons/profession.svg",
              },
            },
            {
              title: "Fields Helping In",
              icon: {
                imageUrl: "/icons/fields-helping-in.svg",
              },
            },
            {
              title: "Trees Adopted",
              icon: {
                imageUrl: "/icons/trees-adopted.svg",
              },
            },
          ],
          rows: [
            {
              name: "Name 1",
              title: "Title 1",
              profession: "Student 1",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
            {
              name: "Name 2",
              title: "Title 2",
              profession: "Student 2",
              fieldsHelpingIn: ["1", "2"],
              treesAdopted: "50",
            },
            {
              name: "Name 3",
              title: "Title 3",
              profession: "Student 3",
              fieldsHelpingIn: ["1"],
              treesAdopted: "25",
            },
            {
              name: "Name 4",
              title: "Title 4",
              profession: "Student 4",
              fieldsHelpingIn: ["1", "2", "3"],
              treesAdopted: "100",
            },
          ],
        },
      },
    ],
  },
  corePillars: {
    cards: [
      {
        title: "Our Mission",
        description:
          "'Mera Ped Mera Pehchaan' is an environmental sustainability initiative that focuses on real-time tracking and public engagement.",
        image: {
          imageUrl: "/green-trees.jpeg",
        },
      },
      {
        title: "Our Vision",
        description:
          "To create a sustainable future for generations to come by planting trees and promoting environmental conservation.",
        image: {
          imageUrl: "/green-trees.jpeg",
        },
      },
      {
        title: "Our Values",
        description:
          "We believe in the power of collaboration and innovation to achieve our goals.",
        image: {
          imageUrl: "/green-trees.jpeg",
        },
      },
    ],
  },
};
export type TTheTeam = typeof TheTeam_Config;
