"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Welcome, I am Anson ^_^",
      "A guy who like code!",
      "Let's discover more",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="flex flex-col uppercase items-center justify-center h-screen snap-y snap-mandatory 
    overflow-scroll"
    >
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      <div className="flex flex-row p-6 uppercase text-xs text-gray-500">
        <Link href="#about">
          <button className="px-2 hover:underline">About</button>
        </Link>
        <Link href="#experience">
          <button className="px-2 hover:underline">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="px-2 hover:underline">Skills</button>
        </Link>
        <Link href="#project">
          <button className="px-2 hover:underline">Project</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
