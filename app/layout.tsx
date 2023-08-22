import { Footer, Navbar, Sidenav } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { useRouter } from "next/router";

const hideNavFooter = ['/account/login', '/account/register'];


// export const metadata: Metadata = {
//   title: "Car Hub",
//   description: "Discover the best cars in the world",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { pathname } = router;
  const isNavFooterShown = !hideNavFooter.includes(pathname);
  console.log(pathname, isNavFooterShown);
  return (


    <>
      {isNavFooterShown && <Navbar />}
      {children}
      <Sidenav />
      {isNavFooterShown && <Footer />}

    </>
  );
}
