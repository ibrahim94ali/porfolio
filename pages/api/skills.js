export const skills = [
  {
    name: "Javascript / Typescript",
    skill: 90,
  },
  {
    name: "Angular",
    skill: 95,
  },
  {
    name: "React",
    skill: 80,
  },
  {
    name: "NextJS",
    skill: 70,
  },
  {
    name: "React Native",
    skill: 85,
  },
  {
    name: "Ionic",
    skill: 90,
  },
  {
    name: "NodeJs / ExpressJs",
    skill: 70,
  },
  {
    name: "Firebase",
    skill: 60,
  },
  {
    name: "MongoDB",
    skill: 90,
  },
  {
    name: "PostreSQL",
    skill: 40,
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
    skill: 90,
  },
  {
    name: "Karma / Jasmine / Protractor",
    skill: 60,
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
];

const getSkills = (_, res) => {
  res.status(200).json(skills);
};

export default getSkills;
