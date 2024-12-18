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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Sr.React Native Developer",
    company_name: "Wallero Technologies Pvt Ltd.",
    icon: WalleroLogo,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Lead a team of 5 developers, ensuring high-quality deliverables through code reviews and mentorship. Design scalable project architecture and managed end-to-end project setup and Delivered Android/iOS builds and releases with Firebase integration for analytics and push notifications.Trained team members and optimized workflows for efficient development.",
    ],
  },
  {
    title: "Jr.React-Native Developer",
    company_name: "Webelight Solutions Pvt Ltd.",
    icon: WebelightLogo,
    iconBg: "#383E56",
    date: "Nov 2022 - Nov 2023",
    points: [
      "Worked extensively on React Native, React.js, and Next.js for web and mobile application development.Implemented state management using Redux and integrated CodePush for seamless updates. Built and maintained CI/CD pipelines and implemented flavor schemas for environment-specific builds. Configured push notifications and integrated Node.js services for backend support.",
    ],
  },
  {
    title: "React-Native Developer",
    company_name: "Innomick Technology Pvt Ltd.",
    icon: InnomickLogo,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - October 2023",
    points: [
      "Gained hands-on experience in navigation, pixel-perfect Ul development, and API integration. Worked on designing end-to-end app flows and setting up scalable folder structures. Focused on improving code quality and integrating third-party packages. Configured and implemented Firebase for app functionality and analytics",
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
  {
    name: "Counteries",
    description:
      "Proficient in integrating multiple APIs using React JS and JavaScript to create dynamic and responsive web applications. Some of them",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Api,
    source_code_link: "https://dazzling-pixie-5d6397.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
