import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "../LiIcon";

const Detail = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb:0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a href={companyLink} className="capitalize text-primary font-bold">
            {company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="text-8xl font-bold w-full text-center mb-32 md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Detail
            position={"Frontend Developer"}
            company={"@Exnodes Company"}
            time={"March, 2022 - September, 2022 "}
            address={"Tp. Ho Chi Minh"}
            work={
              "Worked on a team responsible for developing new features for Google of search engine including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"
            }
          />
          <Detail
            company={"@Geniebook Company"}
            position={" Software Engineer"}
            time={"September, 2022 - Mar 2023"}
            address={"Tp. Ho Chi Minh"}
            work={
              "Worked on a team responsible for developing new features for Google of search engine including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"
            }
          />
          <Detail
            company={"@C2C Techhub"}
            position={" Software Engineer"}
            time={"March, 2023 - August, 2023"}
            address={"Tp.Ho Chi Minh"}
            work={
              "Worked on a team responsible for developing new features for Google of search engine including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"
            }
          />
          <Detail
            company={"@Ahamove Company"}
            position={" Software Engineer"}
            time={"August, 2023 - Present"}
            address={"Tp.Ho Chi Minh"}
            work={
              "Worked on a team responsible for developing new features for Google of search engine including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"
            }
          />
        </ul>
      </div>
    </div>
  );
};
export default Experience;
