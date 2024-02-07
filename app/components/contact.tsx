"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const Contact = () => {
  // const { register, handleSubmit } = useForm<Inputs>();
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:yuenwork109@gmail.com?subject=${formData.lastName}
  //     &body=Hi my name is ${formData.firstName} ${formData.lastName}. - ${formData.message} (${formData.email})`;
  // };

  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   const mailtoLink = `mailto:yuenwork109@gmail.com?subject=${formData.lastName}&body=Hi my name is ${formData.firstName} ${formData.lastName}. - ${formData.message} (${formData.email})`;

  //   // Check if the form is valid
  //   if (
  //     formData.firstName &&
  //     formData.lastName &&
  //     formData.email &&
  //     formData.message
  //   ) {
  //     // Valid form, open the email link
  //     window.location.href = mailtoLink;
  //   } else {
  //     // Invalid form, show an error message
  //     setErrorMessage("Please fill in all the fields.");
  //   }
  // };

  const { register, handleSubmit } = useForm<Inputs>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Email sent successfully!");
      } else {
        setErrorMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("An error occurred while sending the email.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative flex flex-col h-screen items-center justify-center mx-auto px-10 text-center 
      md:text-left"
    >
      <h3 className="absolute top-24 uppercase">Contact</h3>
      <div className="flex flex-row mb-2">
        <h4 className="text-xl md:text-left">
          Find me to discuss what you need!
          <span className="underline decoration-red-600">Explore More!</span>
        </h4>
      </div>
      <div className="space-y-2">
        <div className="animate-pulse flex items-center  justify-center space-x-5">
          <PhoneIcon className="w-7 h-7" />
          <p>+852 53662026</p>
        </div>
        <div className="animate-pulse flex items-center  justify-center space-x-5">
          <MapPinIcon className="w-7 h-7" />
          <p>Netherlands, Hong Kong</p>
        </div>
        <a href="mailto:yuenwork109@gmail.com">
          <div className="animate-pulse flex items-center  justify-center space-x-5">
            <EnvelopeIcon className="w-7 h-7" />
            <p>yuenwork109@gmail.com</p>
          </div>
        </a>

        {/* <form onSubmit={handleSubmit(onSubmit)} action="" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              {...register("firstName")}
              type="text"
              placeholder="First Name"
              className="w-full p-2 border border-gray-600 rounded-md bg-[#292929] text-white"
            />
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-600 rounded-md bg-[#292929] text-white"
            />
          </div>
          <input
            {...register("email")}
            type="text"
            placeholder="Email"
            className="w-full mt-4 p-2 border border-gray-600 rounded-md bg-[#292929] text-white"
          />
          <textarea
            {...register("message")}
            placeholder="Your Message"
            className="w-full mt-4 p-2 border border-gray-600 rounded-md bg-[#292929] text-white"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className=" w-full mt-4 px-4 py-2 bg-[#292929] text-white rounded-md hover:underline hover:bg-red-400
             transition duration-300"
          >
            Submit
          </button>
        </form>
        {errorMessage && (
          <div className="text-red-500 mt-2">
            <p>{errorMessage}</p>
          </div>
        )} */}
      </div>
    </motion.div>
  );
};

export default Contact;
