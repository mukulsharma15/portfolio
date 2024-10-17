/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import portrait from "@/public/portrait.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className=" mb-28 max-w-[50rem] text-center sm:mb-0">
      {" "}
      {/* Section tag is used when the components inside have the same semantic meaning, div is only used when we need to seperate components */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={portrait}
              alt="Mukul Portrait"
              width={192}
              height={192}
              quality={95}
              priority={true} // This will make sure that the image is loaded first
              className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              stiffness: 125,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      {/* leading is line height, using ! gives importance over others*/}
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mukul.</span> I'm a{" "}
        {/*  {" "} this is to add space, to remove this just write all the text in a single line  */}
        <span className="font-bold">Full Stack Developer</span> and a{" "}
        <span className="font-bold">Computer Science</span> student at the{" "}
        <span className="font-bold">South Asian University.</span> I enjoy
        building <span className="italic">sites & apps. </span> My focus is{" "}
        <span className="underline">React, Next.js, and Tailwind CSS. </span>
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center p-4 gap-2 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
          {/*group hover makes it animate when the group is hovered */}
        </Link>
        <a
          href="/CV.pdf"
          download={true} // no need to write /public/cv.pdf
          className="group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />{" "}
          {/* transition makes the animation smooth*/}
        </a>
        <a
          href="https://linkedin.com/mukulbamn" target="_blank"
          className="bg-white  text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/mukulbamn" target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem]  focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10" // This is used to increase the size of the icon
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
