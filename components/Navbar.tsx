"use client";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { CustomButton, NavbarLinkItem } from ".";
import ThemeButton from "./ThemeButton";
import { UserIcon } from "@heroicons/react/24/outline";
import { solutions } from "@/constants";



const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", scrollEventCallback);

    return () => {
      window.removeEventListener("scroll", scrollEventCallback);
    };
  }, []);

  const scrollEventCallback = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80 ? setSticky(true) : setSticky(false);
    }
  };

  return (
    <header
      className={`w-full top-0 z-20 transition-all ease-in-out ${sticky ? "fixed bg-white bg-opacity-95 dark:bg-opacity-70  dark:bg-gray-950 dark:backdrop-blur shadow-sm" : "absolute bg-transparent"
        }`}
    >
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain dark:fill-slate-200"
          />
        </Link>
        <div className="flex items-center">
          <NavbarLinkItem label="Home" link="/"></NavbarLinkItem>
          <NavbarLinkItem label="Socials" menuContent={solutions}></NavbarLinkItem>
          <NavbarLinkItem label="About" menuContent={solutions}></NavbarLinkItem>

          <ThemeButton />
          <CustomButton
            title="Sign In"
            btnType={"button"}
            containerStyles={`rounded-full min-w-[130px] ${sticky ? "text-white bg-primary-blue" : "text-primary-blue bg-white"
              }`}
          >
            <UserIcon className="w-5 h-5" />
          </CustomButton>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
