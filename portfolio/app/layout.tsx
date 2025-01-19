import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/identity-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul Lakandri - Full Stack Developer",
  description:
    "Professional portfolio of Paul Lakandri, a Full Stack Developer specializing in creating innovative solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
