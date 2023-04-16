import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 absolute shadow-dark cursor-pointer dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-14 dark:bg-dark">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x={"-5vw"} y="-10vw" />
        <Skill name="HTML" x={"-25vw"} y="2vw" />
        <Skill name="Javascript" x={"20vw"} y="6vw" />
        <Skill name="Reactjs" x={"0vw"} y="15vw" />
        <Skill name="Nextjs" x={"-20vw"} y="-15vw" />
        <Skill name="Web Design" x={"15vw"} y="-12vw" />
        <Skill name="Figma" x={"32vw"} y="-5vw" />
        <Skill name="Tailwindcss" x={"0vw"} y="-20vw" />
        <Skill name="Angular" x={"-25vw"} y="18vw" />
        <Skill name="Vuejs" x={"20vw"} y="18vw" />
      </div>
    </>
  );
};

export default Skills;
