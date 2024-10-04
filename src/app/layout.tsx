import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dummy Landing Page",
  description:
    "A dummy SaaS landing page created by Abdullah Ansari to showcase frontend and framer motion skills.",
  authors: [{ name: "Abdullah Ansari" }],
  keywords: [
    "SaaS",
    "Landing Page",
    "Frontend",
    "React",
    "Framer Motion",
    "Tailwind CSS",
    "Next.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
