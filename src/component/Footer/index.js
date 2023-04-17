import React from "react";
import Layout from "../Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:py-6 lg:flex-col">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build with <span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link href={"/"} className="underline underline-offset-2">
            Dyno
          </Link>
        </div>
        <Link href={"/"}>Say hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
