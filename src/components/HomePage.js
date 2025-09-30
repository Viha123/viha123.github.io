import React from "react";
import ProjectCard from "./projectPage";
import Hero from "./Hero";
import astar from "../images/astarimg.png";
import ladybug from "../images/ladybug.png";
import blackjack from "../images/blackjack.png";
import minesweeper from "../images/minesweeper.png";
import calhacks from "../images/calhacks.png";
import aoc from "../images/aocprogress.png";
import sportgame from "../images/sportgame.png"
import chessengine from "../images/chessengine.png"
import ecomm from "../images/ecomm.png"
import raymarch from "../images/raymarch.png"
import raycast from "../images/raytraceMultipleTextures.png"
import ik from "../images/ik.png"
import flocking from "../images/flocking.png"
import bouncingBall from "../images/bouncingBall.png"
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div
        id="home"
        className="pt-48 align-middle justify-center flex text-zinc-900 h-screen"
      >
        <Hero />
      </div>
      
      <div className="min-h-screen bg-zinc-900">
        <div
          id="projects"
          className=" pt-20 flex flex-col justify-center items-center"
        >
          <h1 className="mt-[5vh] text-4xl ">My Work</h1>
          <div className="grid grid-cols-3 gap-4">
          <ProjectCard 
              image = {chessengine}
              link = {"https://github.com/Viha123/quakece"}
              title = "A Chess Engine In C++"
              technologies={"C++, SFML (for the Graphics), gprof, valgrind for profiling"}
              description={"A AI made with multiple algorithms to play the game of chess. Includes a Player vs Player and Player vs AI mode. I learned a lot about performance and testing with this project"}
            />
            <ProjectCard 
              image = {raycast}
              link = {"https://github.com/Viha123"}
              title = "A Raycaster"
              technologies={"C++, OpenFrameworks, OpenGL"}
              description={"A CPU based Raycaster that supports textures, spotlights, and meshes."}
            />
            <ProjectCard 
              image = {raymarch}
              link = {"https://github.com/Viha123"}
              title = "RayMarch"
              technologies={"C++, OpenFrameworks, OpenGL"}
              description={"A CPU based addition to the raycaster, exploring the concepts of RayMarching and smoothing functions."}
            />
            <ProjectCard 
              image = {ik}
              link = {"https://github.com/Viha123"}
              title = "Inverse Kinematics"
              technologies={"C++, OpenFrameworks, OpenGL"}
              description={"A 2 arm solver for Inverse Kinematics in a robotics application."}
            />
            <ProjectCard 
              image = {flocking}
              link = {"https://github.com/Viha123"}
              title = "Flocking Stimulation"
              technologies={"C++, OpenFrameworks, OpenGL"}
              description={"A CPU based flocking stimulation, implementing Reynold's rules of flocks to stimular bird flight."}
            />
            <ProjectCard 
              image = {bouncingBall}
              link = {"https://github.com/Viha123"}
              title = "Bouncing ball Physics"
              technologies={"C++, OpenFrameworks, OpenGL"}
              description={"A GPU based bouncing ball raytracer. Explore particle systems, and shaders with this project"}
            />
            <ProjectCard 
              image = {sportgame}
              link = {"https://github.com/Viha123/gamepredictor-"}
              title = "Sport Game Predictions"
              technologies={"React.js, Express.js, Puppeteer.js, MongoDB"}
              description={"A full stack MERN app to predict results of sport tournaments, and compete with each other"}
            />
             <ProjectCard 
              image = {ecomm}
              link = {"https://github.com/ninaw04/web-store"}
              title = "E-Commerce Website"
              technologies={"React.js, Express.js, MySQL, Digital Ocean"}
              description={"A simple E-commerce website to buy and sell items."}
            />
            <ProjectCard
              image={ladybug}
              link = {"https://github.com/emurun/csc151-03-01/tree/nashitasFinalBranch"}
              title="LadyBug: A bug tracking system"
              technologies="Java, JavaFX, SQLite, FXML"
              description="This is a simple CRUD app to manage and track bugs in projects created in a team of 3 people. Uses the MVC architecture to architect this app"
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
      <div className=" bg-zinc-900">
        <About /> {/* Include the About component */}
      </div>
      <div className="min-h-screen bg-zinc-900">
        <Contact /> {/* Include the Contact component */}
      </div>
    </div>
  );
};

export default HomePage;