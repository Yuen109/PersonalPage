import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anson's Portfolio",
  description: "Let you all know about me!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-[rgb(36,36,36)] text-white max-w-5xl w-full items-center justify-between
      font-mono mx-auto"
      >
        <div className="z-10 text-sm lg:flex">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
