"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative flex flex-col h-screen overflow-hidden items-center justify-center 
      max-w-full mx-auto px-10 text-center md:text-left md:flex-row"
    >
      <h3 className="absolute top-24 uppercase">Experience</h3>
      <div className="w-full flex space-x-5 overflow-x-auto snap-x snap-mandatory">
        {/* Card */}
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
