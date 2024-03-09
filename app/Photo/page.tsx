"use client";
import React from "react";
import { motion } from "framer-motion";
import Structure from "../components/photo/Structure";

const photoPage = () => {
  // Replace these image URLs with your actual image URLs
  const images = [
    "/DSCF0183.JPG",
    "/DSCF0184.JPG",
    "/DSCF0198.JPG",
    "/DSCF0586.JPG",
    "/DSCF0600.JPG",
    "/DSCF0599.JPG",
    "/DSCF2325.JPG",
    "/DSCF2342.JPG",
    "/DSCF2348.JPG",
    "/DSCF2349.JPG",
    "/DSCF2352.JPG",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative mx-auto px-4 text-center"
    >
      {/* Title of the page */}
      <h3 className="mb-4 uppercase">Picture Profile</h3>
      <div className="relative">
        <Structure images={images} />
      </div>
    </motion.div>
  );
};

export default photoPage;
