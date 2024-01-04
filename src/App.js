import React from "react";
import Navbar from "./components/navbar";
import ProjectCard from "./components/projectPage";
import Hero from "./components/Hero";
import astar from "./images/astarimg.png";
import ladybug from "./images/ladybug.png";
import blackjack from "./images/blackjack.png";
import minesweeper from "./images/minesweeper.png";
import calhacks from "./images/calhacks.png";
import aoc from "./images/aocprogress.png";
import "./App.css";
import About from "./components/About"; // Import the About component
import Contact from "./components/Contact";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="bg-zinc-900 text-white font-mono scroll-smooth">
      <Navbar />
      <div className="flex flex-col">
        <div
          id="home"
          className="pt-48 align-middle justify-center flex text-zinc-900 h-screen"
        >
          <Hero />
        </div>
        <div className=" bg-zinc-900">
          <About /> {/* Include the About component */}
        </div>
        <div className="min-h-screen bg-zinc-900">
          <div
            id="projects"
            className=" pt-20 flex flex-col justify-center items-center"
          >
            <h1 className="mt-[5vh] text-4xl ">My Work</h1>
            <div className="grid grid-cols-3 gap-4">
              <ProjectCard
                image={ladybug}
                link = {"https://github.com/emurun/csc151-03-01/tree/nashitasFinalBranch"}
                title="LadyBug: A bug tracking system"
                technologies="Java, JavaFX, SQLite, FXML"
                description="This is a simple CRUD app to manage and track bugs in projects created in a team of 3 people."
              />
              <ProjectCard
                image={astar}
                link = {"https://github.com/Viha123/astarstimulator"}
                title="A* Stimulator"
                technologies="Python, Pygame"
                description="A pathfinding algorithm visualizer for A*"
              />
              <ProjectCard
                image={blackjack}
                link = {"https://github.com/Viha123/blackjack"}
                title="BlackJack"
                technologies="Vanilla Javascript"
                description="A fun game built to learn Javascript"
              />
              <ProjectCard
                image={minesweeper}
                link = {"https://github.com/me50/Viha123/tree/ai50/projects/2023/x/minesweeper"}
                title="Minesweeper and Minesweeper AI"
                technologies="Python, Pygame"
                description="The original game of Minsesweeper, as part of an AI course, I also created an AI version of this game."
              />
              <ProjectCard
                image={calhacks}
                link = {"https://github.com/tuedolm/calhack2023zeppos/tree/main"}
                title="CrisisSync"
                technologies="Javascript, ZeppOS, MongoDB"
                description="Hackathon project built with a team of 4. A watch app that allows users to send out distress signals to watches nearby to alert them of shooters."
              />
              <ProjectCard
                image={aoc}
                link = {"https://github.com/Viha123/aoc-viha"}
                title="Advent Of Code"
                technologies="Python, C++"
                description="An opportunity to practice my problem solving skills, as well as learn new languages. I have earned a total of 57 stars"
              />
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-zinc-900">
          <Skills /> {/* Include the Skills component */}
        </div>
        <div className="min-h-screen bg-zinc-900">
          <Contact /> {/* Include the Contact component */}
        </div>
      </div>
    </div>
  );
}

export default App;
