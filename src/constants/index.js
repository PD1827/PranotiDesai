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
    capgemini,
    otw,
    testassislp,
    testassis,
    homepage,
    commercial,
    commercial1,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Presentation Skills",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "Team Management",
      icon: creator,
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
  
  const experiences = [
    {
      title: "Senior Software Engineer",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#383E56",
      date: "October 2022 - present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Successfully engaged in client interactions, conducting demonstrations of the application to showcase its capabilities and secure buy-in.",
      ],
    },
    {
      title: "Looking for job opportunity",
      company_name: "",
      icon: otw,
      iconBg: "#E6DEDD",
      date: "present",
      points: [],
    }
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
      name: "Testing Assistant",
      description:
        "Web-based platform that allows users to generate manual and automation test scripts. Designed only for testing purpose. It generates reponses from chat gpt",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ai model",
          color: "green-text-gradient",
        },
        {
          name: "chatgpt api",
          color: "pink-text-gradient",
        },
      ],
      image: testassislp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Testing Assistant",
      description:
        "Web-based platform that allows users to generate test scripts. The model preserves the privacy by replacing all personal information with unique identifiers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ai models",
          color: "green-text-gradient",
        },
        {
          name: "chatgpt api",
          color: "pink-text-gradient",
        },
      ],
      image: testassis,
      source_code_link: "https://github.com/",
    },
    {
      name: "AI Portal",
      description:
        "A user-friendly and interactive portal that gives access to the user of all the applications which has ai models incorporated in it. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },
      ],
      image: homepage,
      source_code_link: "https://github.com/",
    },
    {
      name: "Commercial App",
      description:
        "A commercial application containing interactive components which include various graphs, calender, kanban, color picker, order details.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "orange-text-gradient",
        },
      ],
      image: commercial,
      source_code_link: "https://commercial-chi.vercel.app/",
    },
    {
      name: "Commercial App",
      description:
        "A commercial application containing interactive components which include various graphs, calender, kanban, color picker, order details.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "orange-text-gradient",
        },
      ],
      image: commercial1,
      source_code_link: "https://commercial-chi.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };