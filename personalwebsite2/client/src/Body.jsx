import React from "react";
import NavBar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Project from "./Component/project";

function Body() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Project />
    </>
  );
}

export default Body;
