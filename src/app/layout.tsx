import type { Metadata } from "next";
import { Caveat, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const caveat_init = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const nunito_init = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Hamza Portfolio",
  description: "build with Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat_init.variable} ${nunito_init.variable} ${nunito_init.className}`}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
