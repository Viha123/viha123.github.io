import React from "react";
import Navbar from "./components/navbar";
import ProjectCard from "./components/projectPage";
import Hero from "./components/Hero";
import profile from "./images/profile.jpg";
import "./App.css";
import About from "./components/About"; // Import the About component
function App() {
  return (
    <div className="bg-zinc-900 text-white font-mono scroll-smooth">
      <Navbar />
      
      <div id="home" className="pt-48 align-middle justify-center flex text-zinc-900 h-screen ">
        <Hero />
      </div>
      <div className="h-screen bg-zinc-900">
        <About /> {/* Include the About component */}
      </div>
      <div className="h-screen bg-zinc-900">
        <div id="projects" className=" pt-20 flex flex-col justify-center items-center">
          <h1 className="mt-[5vh] text-4xl">Projects</h1>
          <div className="grid grid-cols-3 gap-4">
            <ProjectCard image={profile} description="something something" technologies="something" />
            <ProjectCard image={profile} description="something something" technologies="something" />
            <ProjectCard image={profile} description="something something" technologies="something" />
            <ProjectCard image={profile} description="something something" technologies="something" />
            <ProjectCard image={profile} description="something something" technologies="something" />
            <ProjectCard image={profile} description="something something" technologies="something" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
