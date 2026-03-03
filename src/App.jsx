import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Outletnav from "./Components/Outletnav";
import Resume from "./Components/Resume";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Outletnav/>}>
        <Route  path="/" element={<Home />} />
        <Route  path="/project" element={<Project />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

