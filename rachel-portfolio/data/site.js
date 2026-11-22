// Edit your content here. The page in app/page.js reads everything from this file.

export const profile = {
  name: "Rachel",
  surname: "Nigussie",
  role: "Full-Stack Web Developer",
  location: "Addis Ababa, Ethiopia",
  intro:
    "I build responsive, scalable, user-focused web applications, from the interface people touch to the API and database behind it.",
  linkedin: "https://www.linkedin.com/in/rachel-nigussie-838989331/",
  github: "https://github.com/Rahelcasiopia",
  email: "", // add your email, e.g. "you@example.com"; it appears in Contact when filled
  phone: "", // add your phone number; it appears in Contact when filled
};

export const facts = [
  ["React.js · Next.js", "Frontend"],
  ["Node.js · Express.js", "Backend"],
  ["MySQL · REST APIs", "Data and services"],
  ["Evangadi Networks", "Full-stack training"],
];

export const about = {
  pull: "Clean code, thoughtful interfaces, and solutions built for real needs.",
  paragraphs: [
    "I am a full-stack web developer who works across the whole product: reusable React and Next.js components, Node.js and Express.js services, RESTful APIs, and MySQL databases that keep application data organised.",
    "I care about maintainable code, performance, and the experience of the person using the page. I style with Tailwind CSS for consistent, responsive layouts, manage work with Git and GitHub, and debug and test carefully before anything ships.",
  ],
};

export const skills = [
  { title: "Frontend", items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Responsive design"] },
  { title: "Backend", items: ["Node.js", "Express.js", "RESTful API development", "Server-side development", "API integration"] },
  { title: "Database", items: ["MySQL", "SQL", "Relational database management", "Database integration"] },
  { title: "Tools", items: ["Git & GitHub", "Visual Studio Code", "npm", "Postman"] },
];

export const experience = {
  when: "Freelance & independent projects", // add dates here when ready
  title: "Full-Stack Web Developer",
  org: "EMNEX Digital Solutions",
  bullets: [
    "Designed and developed responsive web applications with React.js and Next.js.",
    "Built reusable frontend components and interactive interfaces.",
    "Developed backend functionality with Node.js and Express.js.",
    "Created RESTful APIs connecting frontend and backend services.",
    "Integrated MySQL databases to manage application data.",
    "Used Tailwind CSS for responsive, consistent interfaces.",
    "Managed source control with Git and GitHub.",
    "Debugged and tested issues, with a focus on maintainable code, performance, and user experience.",
  ],
};

export const projects = [
  {
    numeral: "I",
    name: "Evangadi Forum",
    text: "A question-and-answer platform where members of the Evangadi community post questions and answer each other. Node.js backend with a separate client front end.",
    tags: ["Node.js", "Client app", "Q&A platform"],
    url: "https://github.com/Rahelcasiopia/Evangadi-Forum",
  },
  {
    numeral: "II",
    name: "Ousman Homes",
    text: "A full-stack web application built with modern JavaScript tooling.",
    tags: ["JavaScript", "Full-stack"],
    url: "https://github.com/ayuleul/ousmanhomes",
  },
  {
    numeral: "III",
    name: "Amazon API Deployment",
    text: "A Node.js API project prepared for deployment.",
    tags: ["Node.js", "API", "Deployment"],
    url: "https://github.com/Rahelcasiopia/amazon-api-deployment",
  },
  {
    numeral: "IV",
    name: "Netflix Clone",
    text: "A responsive, Netflix-style front-end interface.",
    tags: ["Frontend", "Responsive UI"],
    url: "https://github.com/Rahelcasiopia/Netfilx_clone",
  },
];

export const education = [
  { name: "Evangadi Networks", detail: "Full-Stack Web Development Program" },
  { name: "Addis Ababa Science and Technology University", detail: "Addis Ababa, Ethiopia" },
];
