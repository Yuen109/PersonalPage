"use client";
import React from "react";
import { motion } from "framer-motion";
import Structure from "../../components/videoCard/Structrue";

const photoPage = () => {
  // Replace these image URLs with your actual image URLs
  const video = ["/Central.mp4", "/Japan_Osaka_Video.mp4"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative mx-auto px-4 text-center"
    >
      {/* Title of the page */}
      <h3 className="mb-4 uppercase">Video Profile</h3>
      <div className="relative">
        <Structure videos={video} />
      </div>
    </motion.div>
  );
};

export default photoPage;
