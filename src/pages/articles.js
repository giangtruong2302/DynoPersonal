import AnimateText from "@/component/AnimateText";
import Layout from "@/component/Layout";
import TransactionEffect from "@/component/TransactionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article2 from "../../public/images/articles/What is Redux with easy explanation.png";

import { motion, useMotionValue } from "framer-motion";
const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  const handleMouse = (event) => {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };
  const handleMouseLeave = (event) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };
  return (
    <Link
      href={""}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize underline-offset-2 hover:underline text-xl font-semibold">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto rounded-lg absolute z-10 hidden"
        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        initial={{ opacity: 0 }}
      />
    </Link>
  );
};
const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} />
      <span className="text-primary font-semibold">{date}</span>
    </motion.li>
  );
};

const FeatureArticle = ({ title, img, time, sumary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 rounded-br-3xl -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light " />
      <Link href={""} className="w-full inline-block cursor-pointer rounded-lg">
        <FramerImage
          src={img}
          alt=""
          className="w-full h-auto rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </Link>
      <Link href={""} className="capitalize text-2xl font-bold my-2">
        <h2 className="my-2 font-bold capitalize text-2xl underline-offset-2 hover:underline dark:text-light">
          {title}
        </h2>
      </Link>
      <p className="text-sm dark:text-light">{sumary}</p>
      <span className="text-primary font-semibold ">{time}</span>
    </li>
  );
};
const Articles = () => {
  return (
    <>
      <Head>
        <title>Articles | Giang Personal Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/profile/avaG copy.svg" />
      </Head>
      <TransactionEffect />
      <div className="w-full flex flex-col items-center justify-center">
        <Layout>
          <AnimateText
            text={"Word can to change the world"}
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeatureArticle
              img={article}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              sumary={
                "  Learn how to build a custom pagination component in ReactJS from scratch.  Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={" 9 min read"}
            />
            <FeatureArticle
              img={article}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              sumary={
                "  Learn how to build a custom pagination component in ReactJS from scratch.  Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={" 9 min read"}
            />
          </ul>
          <h2 className="text-center font-bold text-4xl w-full my-16 mt-32 dark:text-light">
            All Articles
          </h2>
          <Article
            img={article2}
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling        "
            }
            date={"Sun 16 Apr "}
          />
          <Article
            img={article2}
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling        "
            }
            date={"Sun 16 Apr "}
          />{" "}
          <Article
            img={article2}
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling        "
            }
            date={"Sun 16 Apr "}
          />{" "}
          <Article
            img={article2}
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling        "
            }
            date={"Sun 16 Apr "}
          />{" "}
          <Article
            img={article2}
            title={
              "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling        "
            }
            date={"Sun 16 Apr "}
          />
        </Layout>
      </div>
    </>
  );
};

export default Articles;