"use client";
import React from "react";
import { motion } from "framer-motion";

interface CompanyCard {
  img: string;
  companyName: string;
  // name: string;
  startYear: number;
  endYear: number;
  startDate: number;
  endDate: number;
  point: string[];
}

const ExperienceCard: React.FC<CompanyCard> = (companyCard) => {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] h-screen snap-center bg-[#292929] p-10 hover:opacity-100
      opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={companyCard.img}
        className="w-32 h-32 rounded-full object-cover object-center md:w-[200px] md:h-[200px]"
      />
      <div className="px-0 my-1 md:px-10">
        <h4 className="fond-bold text-center">{companyCard.companyName}</h4>
        {/* <p>Name</p> */}
        <p className="text-center">
          Start {companyCard.startYear} {companyCard.startDate} - Ended{" "}
          {companyCard.endYear} {companyCard.endDate}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-xs mt-1">
          {companyCard.point.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
