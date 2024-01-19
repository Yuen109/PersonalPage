"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative flex flex-col h-screen items-center justify-center mx-auto px-10 text-center md:text-left md:flex-row"
    >
      <h3 className="absolute top-24 uppercase">About</h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        //   viewport={{ once: true }}
        src="https://media.licdn.com/dms/image/C5603AQEJfvf7gJ89Eg/profile-displayphoto-shrink_200_200/0/1654998888737?e=1710979200&v=beta&t=Jdo5xHdxeKb6PPLcVfepjeQXvIHrXr5WhhMoj5VK10g"
        className="w-40 h-40 rounded-full flex-shrink-0 object-cover md:rounded-lg md:w-64 md:h-64"
      />
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-10 px-0 py-4 md:px-10"
      >
        <h4 className="">Here is my background</h4>
        <p className="text-xs md:w-70">
          Hello and welcome to my website! My name is Anson and I am a web
          developer from Hong Kong. I have a passion for coding, reading books,
          and doing sports. I enjoy creating websites that are user-friendly,
          responsive, and functional. I am currently working on some small
          projects, such as a tutor matching platform and a landing page for my
          friend tutorial center. These projects allow me to apply my skills and
          learn new technologies. I hope you find my website informative and
          interesting. Feel free to contact me if you have any questions or
          feedback. Thank you for visiting!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
