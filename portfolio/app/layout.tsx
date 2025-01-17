import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
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
        <Providers>
          <div className="flex min-h-screen">
            <div className="fixed left-0 top-0 h-screen">
              <Sidebar />
            </div>
            <main className="flex-1 ml-[450px]">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
