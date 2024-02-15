"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      // className="relative flex flex-col h-screen items-center justify-center mx-auto px-10 text-center md:text-left
      // md:flex-row z-0"
      className="relative flex flex-col h-screen overflow-hidden items-center justify-center 
      max-w-full mx-auto px-10 text-center md:text-left md:flex-row"
    >
      <h3 className="absolute top-4 left-0 right-0 uppercase">Projects</h3>
      {/* <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"> */}
      {/* <div className="w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"> */}
      <div className="mt-16 md:mt-24 lg:mt-32 w-full flex space-x-5 overflow-x-auto snap-x snap-mandatory">
        {/* projects */}
        <ProjectCard
          img={["Picture 3.png", "/Picture 1.png", "/Picture 2.png"]}
          projectName={"HealthCare App for Elderly"}
          point={[
            "Using React Native",
            "Help Parent to monitor their family (Elderly and children) body wight and height",
            "Calculate BMI",
            "Data tracking",
          ]}
        />
        <ProjectCard
          img={[
            "/Screenshot 2024-02-07 at 11.53.13 AM.png",
            "Screenshot 2024-02-07 at 11.54.50 AM.png",
            "Screenshot 2024-02-07 at 12.01.57 PM.png",
            "Screenshot 2024-02-07 at 12.04.40 PM.png",
          ]}
          projectName={"House, Car, Tour rental Website"}
          point={[
            "Using Python Flask",
            "Phpmyadmin MySQL Database",
            "User Dashboard",
          ]}
        />
        {/* <div className="w-full h-[500px] absolute top-[30%] bg-indigo-200/10 left-0 -skew-y-6" /> */}
      </div>
    </motion.div>
  );
};

export default Project;
