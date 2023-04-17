import Link from "next/link";
import Logo from "../Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../hook/useThemeSwitcher";
import { useState } from "react";

const CustomizeLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link className={`${className} relative group`} href={href}>
      {title}
      <span
        className={`absolute h-[1px] bg-dark left-0 -bottom-0.5 group-hover:w-full
      transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      } dark:bg-light
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomizeMobileLink = ({ href, title, className = "", toogle }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };
  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`absolute h-[1px] bg-dark left-0 -bottom-0.5 group-hover:w-full
      transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      } dark:bg-dark bg-light
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="top-0 z-1000 w-full px-32 py-8 flex items-center justify-between shadow-lg dark:text-light relative lg:px-16 md:px-12 sm:px-8">
      <button
        className="hidden lg:flex flex-col justify-center items-center fixed z-50"
        onClick={handleOpen}
      >
        <span
          className={`bg-dark transition-all duration-300 ease-in-out dark:bg-light block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-in-out dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-1000"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-in-out dark:bg-light block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className=" z-1000">
          <CustomizeLink href="/" title={"Home"} className="mr-4" />
          <CustomizeLink href="/about" title={"About"} className="mx-4" />
          <CustomizeLink href="/project" title={"Project"} className="mx-4" />
          <CustomizeLink href="/articles" title={"Articles"} className="ml-4" />
        </nav>
        <nav className="  z-1000 flex gap-4 flex-wrap justify-center items-center ">
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6"
            whileTap={{ scale: 1.1 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6"
            whileTap={{ scale: 1.1 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6"
            whileTap={{ scale: 1.1 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6"
            whileTap={{ scale: 1.1 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6"
            whileTap={{ scale: 1.1 }}
          >
            <DribbbleIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-black"}
          `}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
     bg-dark/90 dark:bg-light/75 backdrop-blur-md py-32 rounded-lg
     "
        >
          <nav className="flex flex-col justify-center items-center z-1000">
            <CustomizeMobileLink
              href="/"
              title={"Home"}
              className=""
              toggle={handleOpen}
            />
            <CustomizeMobileLink
              href="/about"
              title={"About"}
              className=""
              toggle={handleOpen}
            />
            <CustomizeMobileLink
              href="/project"
              title={"Project"}
              className=""
              toggle={handleOpen}
            />
            <CustomizeMobileLink
              href="/articles"
              title={"Articles"}
              className=""
              toggle={handleOpen}
            />
          </nav>
          <nav className="mt-2 z-1000 flex gap-4 flex-wrap justify-center items-center ">
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              className="w-6 sm:mx-1"
              whileTap={{ scale: 1.1 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              className="w-6 sm:mx-1"
              whileTap={{ scale: 1.1 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              className="w-6 sm:mx-1"
              whileTap={{ scale: 1.1 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              className="w-6 sm:mx-1"
              whileTap={{ scale: 1.1 }}
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              className="w-6 sm:mx-1"
              whileTap={{ scale: 1.1 }}
            >
              <DribbbleIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
         ${mode === "light" ? "bg-dark text-light" : "bg-light text-black"}
         `}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};
export default Navbar;
