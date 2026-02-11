import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import sauAcmImg from "@/public/sau-acm.png";
import alumniconnectImg from "@/public/alumniconnect.png";
import elitecarsImg from "@/public/elitecars.png";

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
      "Graduated with a CGPA of 8.0 from Atma Ram Sanatan Dharma College. Built strong foundations in data structures, algorithms, and software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Full Stack Developer",
    location: "There Is No Earth B (NGO)",
    description:
      "Developed and maintained production-ready web applications using React.js, Next.js, and Django. Collaborated with cross-functional teams to deliver scalable features.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2023 - Sep 2023",
  },
  {
    title: "Managed Network Expert",
    location: "Chegg India",
    description:
      "Solved advanced problems in data structures, algorithms, operating systems, and databases. Helped students understand complex computer science concepts.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Sep 2024",
  },
  {
    title: "MSc Computer Science",
    location: "South Asian University",
    description:
      "Currently pursuing Master's degree with President's Scholarship. Serving as Vice Chair of ACM Student Chapter. Open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "SAU ACM Student Chapter",
    description:
      "Built a full-stack website for the ACM Student Chapter with dynamic routing, event management, and team modules.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: sauAcmImg,
  },
  {
    title: "AlumniConnect",
    description:
      "A Django-based alumni information system with normalized MySQL schema, RESTful APIs, and comprehensive directory features.",
    tags: ["Django", "MySQL", "REST API", "Python"],
    imageUrl: alumniconnectImg,
  },
  {
    title: "EliteCars",
    description:
      "A premium supercar rental platform with responsive frontend interfaces, booking system, and vehicle showcase.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: elitecarsImg,
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
  "Node.js",
  "Express.js",
  "Django",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "MySQL",
  "MongoDB",
  "Git",
  "AWS",
  "Linux",
  "Data Structures",
  "Algorithms",
] as const;
