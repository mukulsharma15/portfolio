import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import sauAcmImg from "@/public/sau-acm.png";
import alumniconnectImg from "@/public/alumniconnect.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc (Hons) Computer Science",
    location: "University of Delhi",
    description:
      "Graduated from Atma Ram Sanatan Dharma College with a 7.73 CGPA (Major: Computer Science, Minor: Mathematics) and a strong systems-to-application foundation.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Front-End Developer Intern",
    location: "There is No Earth B",
    description:
      "Built responsive web pages and components with React.js, Next.js, Express.js, and MySQL while improving frontend performance and backend data workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Dec 2023",
  },
  {
    title: "Subject Matter Expert",
    location: "Chegg India",
    description:
      "Solved 200+ Computer Science questions across algorithms, operating systems, databases, and complexity analysis while maintaining a 96% accuracy rate.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Jul 2024",
  },
  {
    title: "Web Developer",
    location: "The Anecdote Media",
    description:
      "Delivered 2 CRM platforms, built 25+ reusable UI components, integrated LLM tools and n8n automation pipelines, and improved key production pages to Lighthouse 90+.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Feb 2026",
  },
  {
    title: "MSc Computer Science (AI & ML)",
    location: "South Asian University",
    description:
      "Graduated as class topper with a 9.17 CGPA and President Scholarship (AIR 1). Served as Vice Chair & Tech Lead of ACM Student Chapter.",
    icon: React.createElement(FaReact),
    date: "2024 - 2026",
  },
] as const;

export const projectsData = [
  {
    title: "SAU ACM Student Chapter",
    description:
      "Architected and deployed the official SAU ACM website with responsive UI, event listings, team pages, and community-focused content.",
    tags: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "cPanel"],
    imageUrl: sauAcmImg,
  },
  {
    title: "AlumniConnect",
    description:
      "Developed a Django alumni management platform with REST APIs, role-based access control, and cloud-ready deployment architecture.",
    tags: ["Django", "REST API", "MySQL", "AWS", "Bootstrap"],
    imageUrl: alumniconnectImg,
  },
  {
    title: "TIL Video Studio",
    description:
      "Built a TypeScript web app for streamlining short-form educational video creation with reusable UI components and typed interaction flows.",
    tags: ["TypeScript", "Web App", "UI Components"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "C",
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Django",
  "Node.js",
  "Express.js",
  "REST API",
  "FastAPI",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
  "Diffusion Models",
  "GANs",
  "Transformers",
  "LLM Integration",
  "Prompt Engineering",
  "n8n",
  "HTML",
  "CSS",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "GitHub",
  "AWS",
  "GCP",
  "Docker",
  "Linux",
] as const;
