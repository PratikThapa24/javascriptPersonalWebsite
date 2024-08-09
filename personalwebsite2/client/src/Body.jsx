import React from "react";
import NavBar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Project from "./Component/project";
import Experience from "./Component/Experience";

function Body() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Project />
      <Experience />
    </>
  );
}

export default Body;
