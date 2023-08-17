"use client";
import { ThemeProvider } from "next-themes";
import React, { createContext } from "react";

// export const SidenavContext = createContext({ isOpen: false, setIsOpen: () => {} });


const MyThemeProvider = ({ children }: any) => {

  return <ThemeProvider attribute="class">
    {/* <SidenavContext.Provider value={{ isOpen: false, setIsOpen }}> */}
    {children}
    {/* </SidenavContext.Provider> */}

  </ThemeProvider>;
};

export default MyThemeProvider;
