import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carpet,
  car,
  stock,
  faculty,
  threejs,
  django,
  tensorflow,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "AL/ML Engineer",
    icon: creator,
  },
  {
    title: "BlockChain Developer",
    icon: backend,
  },
  
];

const technologies: TTechnology[] = [
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Media and PR Manager",
    companyName: "Locus Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "BB Pvt. Ltd.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sailesh proved me wrong.",
    name: "Suvaya Shrestha",
    designation: "Project Manager",
    company: "BinaryBurstSolutions Pvt. Ltd., Nepal",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  
];

const projects: TProject[] = [
  {
    name: "Carpet Design Using GAN",
    description:
      "Web-based platform that allows users to create carpet design and system assits in enhancing it by using DCGAN|| Pix2Pix || Neural style transfer networks.",
    tags: [
      {
        name: "GAN",
        color: "blue-text-gradient",
      },
      {
        name: "DCGAN",
        color: "green-text-gradient",
      },
      {
        name: "pix2pix",
        color: "pink-text-gradient",
      },
      {
        name: "neuralStyleTransfer",
        color: "orange-text-gradient",
      },
    ],
    image: carpet,
    sourceCodeLink: "https://github.com/99-NinetyNine/GAN_rug_design/",
  },
  {
    name: "eAuction System",
    description:
      "Web application that enables users to view vehicles on auction, perform bidding, and winner is awarded after the auction is disclosed by a group of superadmins(3 memeber for our system)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "celery",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    sourceCodeLink: "https://github.com/99-NinetyNine/eAuction_Nepal/",
  },
  
  {
    name: "Study of Stock Price Prediction using LSTM vs ARIMA using Sentiment Analysis",
    description:
      "A comprehensive stock price prediction model that utilizes fundamental indicators(EPS, ROI etc.), technical indicators(RSI, MA, MACD etc.), macroeconomic factor(Inflation rate etc.) and news sentiment(VADER analysis) to model and predict the stock prices of companies(NABIL bank in our case). We compared conventional and neural neutwork models i.e. ARIMA and LSTM.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "VADER",
        color: "green-text-gradient",
      },
      {
        name: "RNN",
        color: "orange-text-gradient",
      },
      {
        name: "LSTM",
        color: "pink-text-gradient",
      },

    ],
    image: stock,
    sourceCodeLink: "https://github.com/99-NinetyNine/NepalStockPricePrediction",
  },

  {
    name: "Faculty Publication Management System",
    description:
      "The Faculty Publication Management System (FPMS) serves as a centralized platform for managing faculty publications. Default users have access to viewing and searching papers, as well as exporting them in MLA, APA, IEEE, or BibTeX formats. They can also identify paper authors. Faculty members, on the other hand, possess additional privileges such as adding, editing, and deleting papers, as well as adding peers. Establishing centralized repositories for faculty publications facilitates easy storage, management, and retrieval of papers. Moreover, it simplifies the process of citing these papers.",
    tags: [
      {
        name: "Django Rest-Framework",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },

    ],
    image: faculty,
    sourceCodeLink: "https://github.com/99-NinetyNine/FacultyGAte",
  },
];

export { services, technologies, experiences, testimonials, projects };
