import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
function App() {
  return (
    <Router>
      <div className="bg-zinc-900 text-white font-mono scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
