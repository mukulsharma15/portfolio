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
        <span className="font-bold">South Asian University.</span>I enjoy
        building <span className="italic">sites & apps. </span> My focus is{" "}
        <span className="underline">React, Next.js, and Tailwind CSS. </span>
      </motion.p>
      <div className="">
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here <BsArrowRight />
        </Link>
        <a
          href=""
          className="bg-white  px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Download CV <HiDownload />
        </a>
        <a
          href=""
          className="bg-white  text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full"
        >
          <BsLinkedin />
        </a>
        <a
          href=""
          className="bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full"
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
