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
        <ExperienceCard
          img={
            "https://th.bing.com/th/id/OIP.kEdYohW11vwRCHB0mMxvGwHaE8?w=249&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          }
          companyName="Nina Hotel Group"
          startDate={2023}
          endDate={2023}
          startYear={6}
          endYear={12}
          point={[
            "Responsible for handling customers reservation",
            "Manage to reply customers’ requirements",
          ]}
        />
        <ExperienceCard
          img={
            "https://th.bing.com/th/id/OIP.kd0eOrgJiBdgzCFglP--_gAAAA?rs=1&pid=ImgDetMain"
          }
          companyName={"Pan Lloyds Publisher Ltd"}
          startYear={2021}
          endYear={2021}
          startDate={7}
          endDate={12}
          point={[
            "Responsible to enter data to computer",
            "Make sure the data is correct",
          ]}
        />
        <ExperienceCard
          img={
            "https://th.bing.com/th/id/OIP.4Cqb9uH4vmf95Lgt7JQ75QHaHa?w=153&h=180&c=7&r=0&o=5&dpr=2&pid=1.7 "
          }
          companyName={"E.P.S.A Marketing Limited"}
          startYear={2020}
          endYear={2021}
          startDate={7}
          endDate={2}
          point={[
            "Responsible for keeping customers interested in our products",
            "Manage inventory and stock",
          ]}
        />
      </div>
    </motion.div>
  );
};

export default Experience;
