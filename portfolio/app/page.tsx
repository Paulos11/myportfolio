// app/page.tsx
import type { NextPage } from "next";
import { Hero } from "@/components/sections/Hero";
// import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Navbar } from "@/components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />

      {/* <Hero /> */}
      <About />
      {/* <Skills /> */}
      <Projects />
    </div>
  );
};

export default Home;
