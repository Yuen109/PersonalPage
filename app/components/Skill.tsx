// import React from "react";
// import { motion } from "framer-motion";

// type Props = {
//   directionLeft?: boolean;
//   img: string;
//   percentage: number;
// };

// function Skill({ directionLeft, img, percentage }: Props) {
//   return (
//     <div className="group relative flex cursor-pointer">
//       <motion.img
//         initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
//         transition={{ duration: 1 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         src={img}
//         className="rounded-full w-24 h-24 object-cover xl:w-28 xl:h-28 filter group-hover:grayscale border-gray-500
//         transition duration-300 ease-in-out"
//       />
//       <div
//         className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white w-24 h-24 xl:w-28 xl:h-28
//        rounded-full transition duration-300 ease-in-out z-0"
//       >
//         <div className="flex items-center justify-center h-full">
//           <p className="text-xl font-bold text-black opacity-100">
//             {percentage}%
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Skill;

import React from "react";
import { motion } from "framer-motion";

type Props = {
  img: string;
  percentage: number;
};

function Skill({ img, percentage }: Props) {
  return (
    <div className="group relative flex flex-col items-center cursor-pointer">
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        src={img}
        alt="Skill"
        className="rounded-full w-24 h-24 object-cover xl:w-28 xl:h-28 filter group-hover:grayscale border-gray-500
        transition duration-300 ease-in-out"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.8 }}
        className="absolute w-full h-full rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <p className="text-xl font-bold text-black">{percentage}%</p>
      </motion.div>
    </div>
  );
}

export default Skill;
