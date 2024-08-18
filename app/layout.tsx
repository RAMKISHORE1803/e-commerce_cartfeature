"use client";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import DiscountBanner from "./components/layout/DiscountBanner";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "./components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider store={store}>
          <DiscountBanner />
          <Navbar />
          <main className="pt-[var(--navbar-height)]">{children}</main>
          <Toaster />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
