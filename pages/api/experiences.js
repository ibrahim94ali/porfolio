export const experiences = [
  {
    company: "LuckyCrush",
    links: [
      {
        label: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.luckycrush.app",
      },
      {
        label: "App Store",
        link: "https://apps.apple.com/app/luckycrush-live-video-chat/id1658547073",
      },
      {
        label: "Web App",
        link: "https://www.luckycrush.live/",
      },
    ],
    role: "Senior Software Engineer",
    dates: "Jan 2023 - Jan 2025",
    info: "LuckyCrush is an online video chat platform where users can engage in random or specific video call.",
    responsibilities: [
      "Developed the mobile application from scratch using React Native (Expo bare-flow)",
      "Designed and implemented CI/CD pipelines in GitLab for automated builds and submissions via EAS Build",
      "Integrated video call functionality using Voyage OpenTok and LiveKit",
      "Managed app distribution on Apple App Store and Google Play Store",
      "Implemented in-app purchases for both platforms",
      "Introduced multi-language support via Localise",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Typescript",
      "Javascript",
      "Styled Components",
      "Voyage Opentok",
      "Livekit",
      "Gitlab pipelines",
      "App Store",
      "Play Store",
    ],
  },
  {
    company: "Avantstay",
    links: [
      {
        label: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.avantstay.avantstay",
      },
      {
        label: "App Store",
        link: "https://apps.apple.com/us/app/avantstay-vacation-rentals/id1455404746",
      },
      {
        label: "Web App",
        link: "https://avantstay.com/",
      },
    ],
    role: "Senior Software Engineer",
    dates: "Apr 2022 - Nov 2022",
    info: "AvantStay is a premium hospitality platform for short-term rentals in the U.S.",
    responsibilities: [
      "Contributed to the cross-platform mobile application development",
      "Designed and enhanced features using React Native (Expo bare-flow)",
      "Oversaw iOS and Android app deployment and store management",
      "Released updates via OTA (over-the-air) updates",
      "Wrote unit tests to ensure code quality",
      "Conducted code reviews for the mobile front-end team",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Typescript",
      "Javascript",
      "Jest",
      "GraphQL",
      "Styled Components",
      "App Store",
      "Play Store",
    ],
  },
  {
    company: "VMware Cloud Services (CSP)",
    links: [
      {
        label: "Web App",
        link: "https://console.cloud.vmware.com",
      },
    ],
    role: "Front-end Engineer",
    dates: "Apr 2021 - Apr 2022",
    info: "VMware Cloud Services Platform helps businesses manage and secure applications across cloud environments.",
    responsibilities: [
      "Worked with a 20-member front-end team, collaborating closely with backend developers, testers, designers, and managers",
      "Developed and improved features in VMware Cloud Services Platform using Angular",
      "Wrote unit tests (Karma) and end-to-end tests (Protractor)",
      "Reviewed front-end code and monitored CI/CD pipelines (Jenkins)",
      "Contributed to VMware's open-source Angular component library",
      "Improved platform accessibility and compliance",
    ],
    technologies: [
      "Angular",
      "Typescript",
      "Javascript",
      "Clarity Design",
      "Karma",
      "Protractor",
      "Jenkins",
      "ARIA",
      "RxJS",
    ],
  },
  {
    company: "Symanto",
    links: [
      {
        label: "Web App",
        link: "https://www.symanto.com",
      },
    ],
    role: "Front-end Engineer",
    dates: "Jan 2020 - Feb 2021",
    info: "Symanto specializes in AI-driven psycholinguistic analysis.",
    responsibilities: [
      "Developed Insights Platform using Angular (8-11) and RxJS",
      "Enhanced the Management Platform with Redux for state management",
      "Utilized Angular Material and Bootstrap for UI components",
      "Assisted in .NET API development when required",
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
    company: "Bus2Go",
    links: [
      {
        label: "Web App",
        link: "https://www.bus2go.mk",
      },
    ],
    role: "Full Stack Engineer",
    dates: "Sep 2017 - Feb 2021",
    info: "Bus2Go is an online ticketing system for bus transportation.",
    responsibilities: [
      "Built the mobile app using Ionic Framework 3",
      "Developed the web app and admin panel using Angular (6-8)",
      "Contributed to backend API development in .NET Core.",
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
