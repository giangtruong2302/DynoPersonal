import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden dark:text-light md:right-8 md:top-0 md:left-auto md:bottom-auto md:absolute ">
      <div className="w-48 md:w-32 sm:w-28 h-auto flex items-center justify-center relative">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow"}
        />
        <Link
          href={""}
          className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2
          -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark rounded-full w-20 h-20 hover:bg-light hover:text-dark md:h-12 md:w-12 md:text-[10px]
          "
        >
          hire me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
