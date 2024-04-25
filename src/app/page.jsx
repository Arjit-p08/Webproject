"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Forging Digital Paths, Building Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital domain, where full-stack prowess and creative
            flair collide. With expertise in front-end finesse and back-end
            wizardry, my portfolio showcases versatile projects blending design
            and functionality seamlessly. Let&apos;s innovate together, shaping
            the digital landscape with every line of code.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <a href="/DOC-20221010-WA0033_240416_190126.pdf" download="resume">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                My Resume
              </button>
            </a>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
