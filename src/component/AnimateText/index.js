import React from "react";
import { animate, motion } from "framer-motion";

const AnimateText = ({ text, className = "" }) => {
  const quote = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const singleWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div
      className={` w-full mx-auto py-2 flex items-center justify-center text-center dark:text-light sm:py-0`}
    >
      <motion.h1
        className={`${className} inline-block w-full text-dark font-bold capitalize text-8xl`}
        variants={quote}
        initial="initial"
        animate="animate"
        staggerChildren="staggerChildren"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block dark:text-light"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimateText;
