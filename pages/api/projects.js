export const projects = [
  {
    name: "TechStack",
    link: "https://technologystack.netlify.app",
    info:
      "TechStack is a project where people can share the best recourses about technologies, and also for starters, where they can find the best links to start learning a technology.",
    responsibilities: [
      "Creating an API in ExpressJS and GraphQL",
      "Creating a Database using Mongoose and MongoDB",
      "Creating a Web App using Svelte",
      "Creating a Mobile App using React Native with Expo",
      "Designing the front-end using Figma",
      "Deploying the website to Netlify",
      "Deploying the API to Heroku",
    ],
    technologies: [
      "CSS3",
      "HTML5",
      "Figma",
      "Javascript",
      "Typescript",
      "Svelte",
      "MongoDB",
      "Mongoose",
      "GraphQL",
      "React Native",
    ],
  },
  {
    name: "Weather Matters",
    link: "https://ibrahim94ali.github.io/weather-matters",
    info:
      "Weather Matters is a web application which shows the current and forecast weather information of several cities. Data is fetched from a third-party API.",
    responsibilities: [
      "Designing UI/UX",
      "Implementing it in Angular 11",
      "Making responsive for both mobile and computer screens",
      "Writing automated tests",
      "Deploying the app to Github Pages",
    ],
    technologies: [
      "CSS3",
      "HTML5",
      "Figma",
      "Typescript",
      "Angular",
      "Angular Material",
      "Jasmine",
      "Karma",
      "Protractor",
      "ChartJS",
    ],
  },
  {
    name: "FX Calculator",
    link: "https://github.com/ibrahim94ali/Fx-Calculator",
    info:
      "It is a simple mobile application with ready API to convert currencies in real time. A user can convert a specific value of selected base currency in 25 different currencies in real time.",
    responsibilities: [
      "Designing UI/UX",
      "Designing Logo",
      "Implementing it in Ionic 4",
      "Testing the app",
      "Writing automated tests",
      "Delivering the app",
    ],
    technologies: [
      "Adobe XD",
      "HTML5",
      "SCSS",
      "NgRx",
      "RxJs",
      "Ionic",
      "Typescript",
    ],
  },
  {
    name: "Bee Safe",
    link: "https://github.com/ibrahim94ali/BeeSafe",
    info:
      "Bee Safe is a cross platform mobile app where users can manage and store their passwords safely. Users can enter the app with the fingerprint data of the phones or with a pin, generate strong passwords, store each account credentials, copy the password to clipboard for a limited time and use it in other accounts. Users can choose to store all their data locally and transfer to another phone by synchronizing data with the server. Server flushes all data after 24 hours.",
    responsibilities: [
      "Designing UI/UX",
      "Designing Logo",
      "Creating mobile application in Ionic",
      "Using KintoJS for synchronization",
      "Generating secure passwords",
      "Using fingerprint login",
      "Testing the app",
      "Delivering the app",
    ],
    technologies: [
      "Adobe XD",
      "HTML5",
      "SCSS",
      "Ionic",
      "Typescript",
      "Javascript",
      "KintoJS",
    ],
  },
  {
    name: "List It Yourself",
    link: "https://github.com/ibrahim94ali/ListItYourself",
    info:
      "List It Yourself is a cross platform mobile application where users can login with their accounts to create calendar events and to-do lists privately or in groups. They get notifications when an event is about to happen and when somebody in group events/to-do lists updates the event/to-do list.",
    responsibilities: [
      "Designing UI/UX",
      "Designing Logo",
      "Creating mobile application in Ionic",
      "Creating Firebase application for back-end and real-time database",
      "Designing NoSQL structure",
      "Testing the app",
      "Delivering the app",
    ],
    technologies: [
      "HTML5",
      "SCSS",
      "Ionic",
      "Typescript",
      "Firebase",
      "Jira",
      "BitBucket",
    ],
  },
  {
    name: "Prediction App for Return Items in Sales",
    link: "https://github.com/ibrahim94ali/ListItYourself",
    info:
      "This is a solution for a company where they can enter a sale and see if this sale will be returned back or not. The aim of this solution is to cut costs of the company for returns. Our solution uses annual data of sales and develops a system using Machine Learning models to predict the return of each sale in the future.",
    responsibilities: [
      "Getting big data from Kaggle",
      "Exploring data",
      "Cleaning data",
      "Using Machine Learning models (Linear-Regression, Logistic Regression, Randomforest)",
      "Creating own solution",
      "Running training data to train our model",
      "Running test data to append our predictions",
      "Improving accuracy",
    ],
    technologies: ["Python", "NumPy", "Scikit-learn", "Kaggle"],
  },
];

const getProjects = (_, res) => {
  res.status(200).json(projects);
};

export default getProjects;