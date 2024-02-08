"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      // className="relative flex flex-col h-screen items-center justify-center mx-auto
      // px-10 text-center md:text-left md:flex-row"
      className="relative flex flex-col h-screen items-center justify-center mx-auto 
      px-10 text-center md:text-left md:flex-row"
    >
      <h3 className="absolute top-24 uppercase">Skills</h3>
      {/* <div className="grid grid-cols-4 gap-4"> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Skill
          img={
            "https://th.bing.com/th/id/OIP.pzOThFKihEJ-9_K4uwSBtwHaFO?rs=1&pid=ImgDetMain"
          }
          percentage={65}
        />
        <Skill
          img={
            "https://th.bing.com/th/id/OIP.DN7ToydkJZEdVaJVK_NhvwAAAA?w=169&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          }
          percentage={55}
        />
        <Skill
          img={
            "https://th.bing.com/th/id/OIP.DSes_J4GkKW1lKW_t0SpQQHaHa?w=180&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          }
          percentage={50}
        />
        <Skill
          img={
            "https://th.bing.com/th/id/OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa?w=169&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          }
          percentage={65}
        />
        <Skill
          img={
            "https://th.bing.com/th/id/OIP.v1B5ekt7oP6PC-io9wyBOQAAAA?w=174&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          }
          percentage={65}
        />
        <Skill
          img={
            "https://th.bing.com/th/id/OIP.2a9u06oW1HOpAQcPbBpd3gHaHa?w=147&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          }
          percentage={50}
        />
        <Skill
          img={
            "https://th.bing.com/th/id/OIP.HdzDRa1T389o2JpxaPJ6LAHaFj?w=233&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          }
          percentage={65}
        />
        <Skill
          img={
            "https://th.bing.com/th/id/OIP.AQ5rAzGvicbIAudCjnmlyQHaHa?w=166&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          }
          percentage={65}
        />
        <Skill
          img={
            "https://th.bing.com/th/id/OIP.c4RBIyTHaeRH08T4bp_waAHaGO?w=206&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          }
          percentage={70}
        />
        <Skill
          img={
            "https://th.bing.com/th/id/OIP.4uIxyEzU6sVI8dnip3pXmgAAAA?w=90&h=90&c=7&r=0&o=5&dpr=2&pid=1.7"
          }
          percentage={80}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
