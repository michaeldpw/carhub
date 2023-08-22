import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import ThemeButton from "./ThemeButton";
const Footer = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700 dark:text-gray-100">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
          {domLoaded && <ThemeButton />}
        </div>

        <div className="footer__links dark:text-gray-100">
          {footerLinks.map((link) => (
            <div className="footer__link" key={link.title}>
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-gray-500 dark:text-gray-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p className="dark:text-gray-300">@2023 Carhub. All rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 dark:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 dark:text-gray-300">
            Term of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
