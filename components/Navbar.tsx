"use client";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { CustomButton, NavbarLinkItem } from ".";
import ThemeButton from "./ThemeButton";
import { UserIcon } from "@heroicons/react/24/outline";
import { solutions } from "@/constants";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Context } from "@/context";




const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { state, dispatch } = useContext(Context)

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
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center sm:px-10 px-6 py-4">
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
          <div className="hidden md:flex items-center">
            <NavbarLinkItem label="Home" link="/"></NavbarLinkItem>
            <NavbarLinkItem label="Find a Car" link="/"></NavbarLinkItem>
            <NavbarLinkItem label="Socials" menuContent={solutions}></NavbarLinkItem>
            <NavbarLinkItem label="About" menuContent={solutions}></NavbarLinkItem>
          </div><Link href="/account/login">
            <CustomButton
              title="Sign In"
              btnType={"button"}
              containerStyles={`rounded-full min-w-[130px] ml-1 lg:ml-16 ${sticky ? "text-white bg-primary-blue" : "text-primary-blue bg-white "
                }`}
            >
              <UserIcon className="w-5 h-5" />
              <Bars3Icon onClick={() => dispatch({ type: 'TOGGLE', payload: true })} className={`w-5 h-5 cursor-pointer ml-4 md:hidden block ${sticky ? 'text-slate-700 dark:text-white' : 'md:text-white text-gray-900 dark:text-white'}`} />



            </CustomButton>

          </Link>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
