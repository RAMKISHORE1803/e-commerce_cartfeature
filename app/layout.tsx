import { Inter } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./globals.css";
import DiscountBanner from "./components/layout/DiscountBanner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <DiscountBanner/>
        <Navbar/>
        <main className="pt-[var(--navbar-height)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
