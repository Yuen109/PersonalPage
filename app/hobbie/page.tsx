"use client";
import React from "react";
import { motion } from "framer-motion";
import Structure from "../components/hobbieCard/Structure";

const hobbieRoute = () => {
  // Replace these image URLs with your actual image URLs
  const routes = ["Photo", "Video"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative mx-auto px-4 text-center"
    >
      {/* Title of the page */}
      <h3 className="mb-6 uppercase">my hobbies</h3>
      <div className="mt-2 relative">
        <Structure routes={routes} />
      </div>
    </motion.div>
  );
};

export default hobbieRoute;

// import React from "react";
// import { motion } from "framer-motion";
// import Structure from "../components/hobbieCard/Structure";

// const hobbieRoute = () => {
//   // Replace these image URLs with your actual image URLs
//   const routes = ["Photo", "Video"];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 2.5 }}
//       className="relative mx-auto px-4 text-center"
//     >
//       {/* Title of the page */}
//       <h3 className="uppercase">my hobbies</h3>
//       <div className="flex flex-col items-center justify-center h-screen">
//         <Structure routes={routes} />
//       </div>
//     </motion.div>
//   );
// };

// export default hobbieRoute;
