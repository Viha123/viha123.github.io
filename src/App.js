import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import Project from './components/project';
import Hero from "./components/Hero"
function App() {
  return (
    <div class = "bg-zinc-900 text-white h-screen">
      <Navbar/>
      <div className = "mt-10 pt-8 align-middle justify-center flex bg-slate-350">
        <Hero/>
      </div>
      
      {/* <Project/> */}
    </div>
  );
}

export default App;
