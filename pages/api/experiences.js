export const experiences = [
  {
    company: "Musala Soft",
    link: "https://www.musala.com",
    role: "Software Engineer",
    dates: "02.2021 - ongoing",
    info:
      "Musala Soft is a leading company known for its solutions to many internationally well-known clients.",
    responsibilities: [
      "Extend skills area",
      "Design and implement solutions with new technologies",
      "Share knowledge in a team",
    ],
    technologies: [
      "Figma",
      "Javascript",
      "React",
      "NextJS",
      "Svelte",
      "React Native",
      "HTML5",
      "CSS3",
      "GraphQL",
      "ExpressJS",
      "MongoDB",
    ],
  },
  {
    company: "Symanto",
    link: "https://www.symanto.com",
    role: "Front-end Engineer",
    dates: "01.2020 - 02.2021",
    info:
      "Symanto has its own product which is an AI-based solution for customers to analyze their plain data and get fancy results. Customers can upload their own data, also they can create collectors to collect data from other websites. After the data is collected and analyzed, customers can use the charts and tables to understand what categories/topics are the most popular, whether they include positive sentiments or negative sentiments, compare topics and brands, see timelines of data, etc. In addition, to increase the analysis, they can interact with texts to select words in order to create and edit topics and sentiments with them and rerun the project again with improved dictionaries. Management company users can edit customers, projects, dictionaries, clusters, crawlers, etc. They can improve dictionary qualities with inline-editing tools, miller columns, token-based tables etc.",
    responsibilities: [
      "Working in scrum with an engineering team of 15 members",
      "Creating Insights Platform in Angular 8-11",
      "Using Angular features with RxJs for core data services in Insights Platform",
      "Improving Management Platform in Angular 7 - 10",
      "Using Redux for state management in Management Platform",
      "Using Angular Material, Bootstrap for design components",
      "Reviewing front-end code",
      "Contributing to .NET APIs changes when needed",
    ],
    technologies: [
      "Angular",
      "Typescript",
      "Azure DevOps",
      "ChartJS",
      "Stripe",
      "HTML5",
      "SCSS",
      "InVision",
      ".NET",
      "RxJS",
      "NgRx",
      "Bootstrap",
      "Angular Material",
    ],
  },
  {
    company: "Technoperia",
    link: "https://www.technoperia.com",
    role: "Full Stack Engineer",
    dates: "09.2017 - 12.2019",
    info:
      "Technoperia is a company working in software solutions and has its own product named Bus2Go. Bus2Go is a platform where customers can purchase bus tickets online by using 3D secure payment in the web or in the mobile app and use the QR codes for their tickets. Bus drivers can validate tickets by using the mobile app and camera of their phones to scan QR codes. Bus companies can also CRUD routes, timetables, prices, etc.",
    responsibilities: [
      "Working with an engineering team of 5 members",
      "Creating a mobile app in Ionic Framework 3",
      "Creating a web app in Angular 6-8",
      "Creating an Admin Panel in Angular 8 with FUSE Admin Template",
      "Contributing to API creation, in .NET Core Framework",
      "Creating a payment project in C# which deals with payments of HalkBank 3D secure pay",
      "Using Angular Material, Bootstrap, Nebular for design components",
    ],
    technologies: [
      "Angular",
      "Typescript",
      "Javascript",
      "Ionic",
      "HTML5",
      "SCSS",
      "Adobe XD",
      ".NET Core",
      "RxJS",
      "NgRx",
      "Bootstrap",
      "Angular Material",
      "Microsoft SQL Server",
    ],
  },
];

const getExperiences = (_, res) => {
  res.status(200).json(experiences);
};

export default getExperiences;
