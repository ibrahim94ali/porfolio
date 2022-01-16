export const skills = [
  {
    name: "Javascript / Typescript",
    skill: 95,
  },
  {
    name: "Angular",
    skill: 100,
  },
  {
    name: "React",
    skill: 90,
  },
  {
    name: "NextJS",
    skill: 95,
  },
  {
    name: "React Native",
    skill: 90,
  },
  {
    name: "Ionic",
    skill: 100,
  },
  {
    name: "NodeJs / ExpressJs",
    skill: 85,
  },
  {
    name: "Firebase",
    skill: 90,
  },
  {
    name: "MongoDB / NoSQL",
    skill: 90,
  },
  {
    name: "SQL",
    skill: 60,
  },
  {
    name: "C++",
    skill: 60,
  },
  {
    name: "Adobe Photoshop",
    skill: 100,
  },
  {
    name: "Figma / Adobe XD",
    skill: 95,
  },
  {
    name: "Karma / Jasmine / Protractor",
    skill: 80,
  },
  {
    name: ".Net / .Net Core",
    skill: 60,
  },
  {
    name: "HTML / CSS / SCSS",
    skill: 95,
  },
  {
    name: "GraphQL",
    skill: 100,
  },
  {
    name: "Python",
    skill: 50,
  },
  {
    name: "Svelte",
    skill: 75,
  },
  {
    name: "Apollo",
    skill: 80,
  },
  {
    name: "ChartJs",
    skill: 90,
  },
];

const getSkills = (_, res) => {
  res.status(200).json(skills);
};

export default getSkills;
