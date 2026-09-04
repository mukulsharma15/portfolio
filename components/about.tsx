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
        I'm a <span className="font-medium">Computer Science postgraduate (AI & ML)</span> from{" "}
        <span className="font-medium">South Asian University</span>, where I graduated as{" "}
        <span className="italic">class topper</span> with a CGPA of{" "}
        <span className="font-medium">9.17</span> and received the{" "}
        <span className="italic">President Scholarship (AIR 1)</span>. I completed my Bachelor's from{" "}
        <span className="font-medium">University of Delhi</span> with a CGPA of{" "}
        <span className="font-medium">7.73</span>.{" "}
        <span className="italic">My focus</span> is building{" "}
        <span className="underline">production-ready full-stack applications</span> and integrating{" "}
        <span className="underline">LLM-driven automation workflows</span> into real products.
      </p>

      <p>
        I also work on <span className="font-medium">generative AI research</span>, including diffusion-based ECG refinement and time-series synthesis.{" "}
        <span className="italic">Outside tech</span>, I enjoy football and basketball, and I served as{" "}
        <span className="italic">Vice Chair & Tech Lead of the ACM Student Chapter</span>, where I co-founded the chapter and led technical initiatives.
      </p>
    </motion.section>
  );
}
