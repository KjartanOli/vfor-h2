import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "InfoGame",
  description: "Your reliable source for quality games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
