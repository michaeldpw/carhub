"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CustomButton } from ".";

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
      className={`w-full top-0 z-20 transition-all ease-in-out ${
        sticky ? "fixed bg-white shadow-sm" : "absolute bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType={"button"}
          containerStyles={`rounded-full min-w-[130px] ${
            sticky ? "text-white bg-primary-blue" : "text-primary-blue bg-white"
          }`}
        ></CustomButton>
      </nav>
    </header>
  );
};

export default Navbar;
