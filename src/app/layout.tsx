import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Button from "@/components/Button";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URLShortener",
  description: "Web Application to Short url's easy, quickly and free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between items-center border-b-2 border-white bg-custom-background">
          <h1 className="mx-10 my-5 font-bold text-white">EzLink</h1>
          <div className="flex flex-nowrap">
            <Button mobile color="transparent" tcolor="text-white" text="Pricing" />
            <Button mobile color="transparent" tcolor="text-white" text="About it" />
            <Button color="bg-custom-green" tcolor="text-black" text="Log In" />
            <Button color="bg-custom-darkgreen" text="Sign Up" tcolor="text-white" />
          </div>
        </header>
        {children}</body>
    </html>
  );
}
