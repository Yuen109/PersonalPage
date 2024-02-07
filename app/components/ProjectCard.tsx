import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  img: string[];
  projectName: string;
  point: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  projectName,
  point,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center rounded-lg space-y-7 flex-shrink-0
      w-full md:w-[600px] xl:w-[900px] h-90 snap-center bg-[#292929] p-10 hover:opacity-100
      opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full">
        {img.map((image, index) => (
          <motion.img
            key={index}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            // viewport={{ once: true }}
            src={image}
            alt={`Project Image ${index + 1}`}
            className="w-full h-48 object-cotain object-center md:w-[300px] md:h-[200px] rounded"
          />
        ))}
      </div>
      <div className="flex flex-col justify-start items-center w-full md:w-[400px] md:ml-8">
        <h4 className="font-bold text-center md:text-left">{projectName}</h4>
        <ul className="list-disc space-y-4 ml-5 text-xs mt-1">
          {point.map((pointItem, index) => (
            <li key={index}>{pointItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;

// import React from "react";
// import { motion } from "framer-motion";

// interface ProjectCardProps {
//   img: string[];
//   projectName: string;
//   point: string[];
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({
//   img,
//   projectName,
//   point,
// }) => {
//   return (
//     <div
//       className="flex flex-col md:flex-row items-center justify-center rounded-lg space-y-7 flex-shrink-0
//       w-full md:w-[600px] xl:w-[900px] h-90 snap-center bg-[#292929] p-10 hover:opacity-100
//       opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
//     >
//       <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full bg-slate-700">
//         {img.map((image, index) => (
//           <motion.img
//             key={index}
//             initial={{ y: -100, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1.5 }}
//             // viewport={{ once: true }}
//             src={image}
//             alt={`Project Image ${index + 1}`}
//             className="w-full h-48 object-cover object-center md:w-[250px] md:h-[250px] rounded"
//           />
//         ))}
//       </div>
//       <div className="flex flex-col justify-start items-center w-full md:w-[400px] md:ml-8">
//         <h4 className="font-bold text-center md:text-left">{projectName}</h4>
//         <ul className="list-disc space-y-4 ml-5 text-xs mt-1">
//           {point.map((pointItem, index) => (
//             <li key={index}>{pointItem}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
