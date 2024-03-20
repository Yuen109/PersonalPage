import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the type for the props
interface StructureProps {
  routes: string[];
}

const Structure: React.FC<StructureProps> = ({ routes }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="flex flex-wrap justify-center"
    >
      {routes.map((card, index) => (
        <Link key={index} href={`/hobbie/${card}`} passHref>
          <div
            className="min-w-40 min-h-40 m-2 flex items-center justify-center bg-[#292929] p-10 hover:opacity-100
            opacity-40 cursor-pointer transition-opacity duration-200
          rounded-lg md:min-w-60 md:min-h-60 lg:w-96 lg:h-96"
          >
            <span className="text-lg font-semibold">{card}</span>
          </div>
        </Link>
      ))}
    </motion.div>
  );
};

export default Structure;
