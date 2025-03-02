import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  csharp,
  figma,
  WalleroLogo,
  WebelightLogo,
  InnomickLogo,
  TappstrLogo,
  BookThePlay,
  threejs,
  stackoverflowclone,
  Api,
  YeldamKitchenHome,
  Hexagon,
  Krot,
  Vichara,
  AToZee,
  Zaps,
  Detente,
  blazor,
  kotlinJava,
  swift,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full Stack .NET Developer",
    icon: web,
  },
  {
    title: "Xamarin & .NET MAUI Developer",
    icon: mobile,
  },
  {
    title: "iOS & Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blazor & Web App Developer",
    icon: web,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Blazor",
    icon: blazor,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Kotlin-Java",
    icon: kotlinJava,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Technical Lead",
    company_name: "Hexagon Capability Center India (HCCI)",
    icon: Hexagon,
    iconBg: "#E6DEDD",
    date: "September 2024 - Present",
    points: [
      "Migrating a Xamarin app to .NET MAUI.",
      "Fixing MAUI-related issues and upgrading dependencies to the latest .NET version.",
      "Documenting newly implemented features.",
      "Leading the team and managing release operations.",
      "Resolving Windows-specific issues post-migration and overseeing app releases on the stores.",
    ],
  },
  {
    title: "Senior Software Lead",
    company_name: "KR OTIS IT Solutions, Hyderabad",
    icon: Krot,
    iconBg: "#383E56",
    date: "December 2023 - September 2024",
    points: [
      "Contracted by Hexagon to migrate their core project to .NET MAUI.",
      "Upgraded Syncfusion plugins to MAUI-supported versions.",
      "Updated reference projects to the latest .NET framework and resolved compatibility issues.",
      "Implemented new features using handlers and updated custom renderers.",
      "Fixed critical issues and maintained existing workflows.",
    ],
  },
  {
    title: "Technical Mobile Lead",
    company_name: "Vichara Technology (India) Pvt. Ltd, Gurgaon",
    icon: Vichara,
    iconBg: "#E6DEDD",
    date: "November 2022 - December 2023",
    points: [
      "Worked closely with clients to implement requirements.",
      "Integrated native Android SDKs, including ECG devices and NFCs.",
      "Managed Android libraries for customer-specific customization.",
      "Researched and built POCs for feature feasibility.",
      "Maintained and enhanced telemedicine applications for Android and iOS.",
    ],
  },
  {
    title: "Senior Mobile Developer",
    company_name: "Innomick Technologies Pvt. Ltd, Jubilee Hills",
    icon: InnomickLogo,
    iconBg: "#E6DEDD",
    date: "February 2019 - November 2022",
    points: [
      "Developed international products with client-driven features.",
      "Expertise in audio players, third-party SDKs, biometrics, and automotive platforms.",
      "Led and mentored teams, ensuring timely Agile deliveries.",
      "Transitioned from Xamarin to .NET MAUI and integrated Blazor for shared code.",
      "Adapted to new technologies, including Xamarin Native, Forms, and React Native.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "AtoZee Solutions, Toli Chowki",
    icon: AToZee,
    iconBg: "#383E56",
    date: "September 2018 - January 2019",
    points: [
      "Developed and maintained bilingual mobile applications using Xamarin Forms.",
      "Implemented the latest Xamarin features in existing apps.",
      "Managed the mobile app publishing process.",
    ],
  },
  {
    title: "Mobile & Web Developer",
    company_name: "ZAPS Marketing Pvt. Ltd., Banjara Hills",
    icon: Zaps,
    iconBg: "#383E56",
    date: "May 2017 - August 2018",
    points: [
      "Led projects, supporting existing applications and developing new mobile apps.",
      "Expert in troubleshooting OS-related issues for Android applications.",
    ],
  },
  {
    title: "Junior Android Developer",
    company_name: "Detente Technology Pvt. Ltd., Gachibowli",
    icon: Detente,
    iconBg: "#383E56",
    date: "January 2017 - March 2017",
    points: [
      "Developed Android applications using Android Studio.",
      "Created user-friendly UIs with widgets like dialogs, layouts, and buttons.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Yeldam Kitchen",
    description:
      "Built a food subscription platform for B2B and B2C markets with roles like Admin, Subscriber, User, and Delivery Personnel. Features include order placement, reports, attendance tracking, menu reviews, feedback, and subscription renewals. Integrated Razorpay for secure payments, ensuring a seamless user experience and efficient food ordering process",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: YeldamKitchenHome,
    source_code_link: "",
  },
  {
    name: "Tappstr Web Application",
    description:
      "Tappstr offers a single platform for a variety of AI applications. It's user-friendly, simplifying the use of AI for business analytics, content creation, and more.With Tappstr Tokens, users pay for only the services they use, eliminating the need for multiple subscriptions. It ensures data safety and GDPR compliance.Designed for individuals, small businesses, and larger corporations, Tappstr provides an accessible way to explore and apply diverse AI systems.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "red-text-gradient",
      },
    ],
    image: TappstrLogo,
    source_code_link: "https://genai.works/applications/tappstr",
  },
  {
    name: "Book The Play",
    description:
      "Developed and launched a mobile application designed to streamline the process of booking sports facilities and fitness centers. BookThePlay enables users to discover and reserve nearby venues, including cricket grounds, football turfs, badminton, pickleball, and tennis courts, with ease.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "node js",
        color: "grey-text-gradient",
      },
    ],
    image: BookThePlay,
    source_code_link: "https://web.pickleballclub.co.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
