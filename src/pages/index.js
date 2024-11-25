import Layout from "@/component/Layout";
import Navbar from "@/component/Navbar";
import Image from "next/image";
import Project from "../../public/images/profile/avaG.svg";
import Project2 from "../../public/images/profile/avaG copy 2.svg";

import AnimateText from "@/component/AnimateText";
import Link from "next/link";
import { LinkArrow } from "@/component/Icons";
import Hireme from "@/component/Hireme";
import TransactionEffect from "@/component/TransactionEffect";
import Head from "next/head";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/component/hook/useThemeSwitcher";
import { useEffect } from "react";

export default function Home() {
  // const [mode, setMode] = useThemeSwitcher();
  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     setMode(theme);
  //   }
  // }, [setMode]);

  return (
    <>
      <Head>
        <title>Giang Personal Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/profile/avaG copy.svg" />
      </Head>
      <TransactionEffect />

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light dark:bg-dark">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex lg:flex-col justify-between items-center w-full h-full">
            <motion.div
              className="w-1/2 md:w-full"
              initial={{ x: "-100vw" }} // Vị trí ban đầu của hình ảnh
              animate={{ x: 0 }} // Vị trí kết thúc của hình ảnh
              transition={{ duration: 1 }} // Thời gian di chuyển của hình ảnh
            >
              <Image
                src={Project}
                alt="Giang"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                className="w-full h-auto object-cover dark:grayscale lg:hidden md:inline-block md:w-full"
              />
            </motion.div>
            <div className="w-1/2 lg:text-center flex flex-col justify-center items-center self-center lg:w-full">
              <AnimateText
                text={"Hi I'm Duong Truong Giang"}
                className="!text-4xl xl:!text-4xl lg:!text-4xl md:!text-2xl sm:!text-xl xs:!text-lg text-left"
              />
              <AnimateText
                text={"Turning Vision Into Reality With Code And Design. "}
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:text-3xl "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href={"/Middle_DuongTruongGiang_CV.pdf"}
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded text-sm
                  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-black dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Resume <LinkArrow className={"w-4 ml-1"} />
                </Link>
                <Link
                  href={"/contact"}
                  target="_blank"
                  className="capitalize font-medium text-lg text-dark underline ml-4 dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <Hireme />
        </Layout>
      </main>
    </>
  );
}
