"use client";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./globals.css";
import DiscountBanner from "./components/layout/DiscountBanner";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Provider store={store}>
          <DiscountBanner />
          <Navbar />
          <main className="pt-[var(--navbar-height)]">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
