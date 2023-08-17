import { Footer, Navbar, Sidenav } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

import { Provider } from "@/context";
import MyThemeProvider from "@/context/MyThemeProvider";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className="relative">
        <Provider>
          <MyThemeProvider>
            <Navbar />
            {children}
            <Sidenav />
            <Footer />
          </MyThemeProvider>
        </Provider>

      </body>
    </html>
  );
}
