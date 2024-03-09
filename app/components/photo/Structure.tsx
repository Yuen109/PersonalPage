import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define the type for the props
interface StructureProps {
  images: string[];
}

const Structure: React.FC<StructureProps> = ({ images }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="flex flex-wrap justify-center"
    >
      {images.map((imageUrl, index) => (
        <div key={index} className="m-2" style={{ flex: "0 0 48%" }}>
          {/* Adjust the percentage as needed to fit two images in a row can be 28/ 48 */}
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            width={500}
            height={300}
            // className="max-w-full h-full"
            className="max-w-full h-auto"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Structure;
