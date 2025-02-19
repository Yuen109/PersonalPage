"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex flex-row items-center md:flex-1 z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-1 items-center" // Updated to a single flex container
      >
        {/* Logo */}
        <Link href={"/"}>
          <p className="text-2xl uppercase font-extrabold text-gray-400 cursor-pointer underline decoration-red-600">
            ay
          </p>
        </Link>
        {/* Social Platform Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/anson-yuen-774518214/"
          fgColor="gray"
          bgColor="transparent"
          className="ml-2"
        />
        <SocialIcon
          url="https://www.instagram.com/yuennn_109/"
          fgColor="gray"
          bgColor="transparent"
          className="ml-2"
        />
        <SocialIcon
          url="https://github.com/Yuen109?tab=repositories"
          fgColor="gray"
          bgColor="transparent"
          className="ml-2"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-center cursor-pointer"
      >
        <Link href={"/hobbie"}>
          <p className="font-medium uppercase text-gray-400">Hobbies</p>
        </Link>
        <SocialIcon
          className="cursor-pointer ml-2"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href={"#contact"}>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ml-2 cursor-pointer">
            get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
