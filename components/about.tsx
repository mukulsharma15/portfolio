"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Computer Science postgraduate</span> at{" "}
        <span className="font-medium">South Asian University</span>, where I received the{" "}
        <span className="italic">President's Scholarship</span>. I completed my Bachelor's from{" "}
        <span className="font-medium">University of Delhi</span> with a CGPA of 8.0.{" "}
        <span className="italic">My passion</span> lies in building{" "}
        <span className="underline">scalable, production-ready web applications</span>. My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Django, Node.js, and MySQL/MongoDB
        </span>
        . I'm experienced with backend systems, REST APIs, and modern frontend frameworks. I'm currently{" "}
        <span className="font-medium">open to all opportunities</span> — full-time roles, internships, research positions, or freelance work.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing{" "}
        <span className="font-medium">video games</span>, reading books, and gathering knowledge about{" "}
        <span className="font-medium">everything under the sun</span>. I'm also passionate about{" "}
        <span className="font-medium">football and basketball</span>. As the{" "}
        <span className="italic">Vice Chair of ACM Student Chapter</span> at my university, I love connecting with fellow tech enthusiasts and building community.
      </p>
    </motion.section>
  );
}
