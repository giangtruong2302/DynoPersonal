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
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="sticky top-0 z-1000 w-full px-32 py-8 flex items-center justify-between shadow-lg dark:text-light">
      <nav className="z-1000">
        <CustomizeLink href="/" title={"Home"} className="mr-4" />
        <CustomizeLink href="/about" title={"About"} className="mx-4" />
        <CustomizeLink href="/project" title={"Project"} className="mx-4" />
        <CustomizeLink href="/articles" title={"Articles"} className="ml-4" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className=" z-1000 flex gap-4 flex-wrap justify-center items-center ">
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
    </header>
  );
};
export default Navbar;
