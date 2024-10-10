"use client"; //This tells Next.js to render this component on the client side
import React from "react"; //Imports React from the react package
import Link from "next/link"; //Imports the Link component from Next.js
import { links } from "@/lib/data";
import { motion } from "framer-motion"; // npm install framer-motion
// motion uses useEffect and it's a react hook, we can only use react hooks in client components 'use client'
// by default everything is server side rendered
// interactive components like animations, modals, etc. should be client side rendered
// this is why we use 'use client'
export default function Header() {
  return (
    <header className="z-[999] relative">
      {/* z-index won't work without relative */}
      <motion.div
        // since the header is fixed, we need to add padding to the top of the page to avoid the content from being hidden behind the header
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>{" "}
      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li // motion.li is a framer motion component that will animate the li element when it's rendered
              key={link.hash}
              className="h-3/4 flex items-center justify-center"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition" // transition will make the animation smooth
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
