import React, { useState } from "react";
import { Link } from "react-scroll";
import { RoughNotation } from "react-rough-notation";

function NavBar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav className="navbar bg-custom-text-coolTeal text-white">
      <div className="container mx-auto flex justify-center items-center px-4 py-2">
        <div className="flex space-x-14 tracking-widest items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-lg font-bold"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <RoughNotation
              type="underline"
              show={hoveredLink === "home"}
              color="#fff"
              animationDuration={1000}
              strokeWidth={3}
            >
              Home
            </RoughNotation>
            
          </Link>
          <Link
            to="about"
            className="text-lg font-bold"
            smooth={true}
            duration={500}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <RoughNotation
              type="underline"
              show={hoveredLink === "about"}
              color="#fff"
              animationDuration={1000}
              strokeWidth={3}
            >
              About
            </RoughNotation>
          </Link>
          <Link
            to="project"
            className="text-lg font-bold"
            smooth={true}
            duration={500}
            onMouseEnter={() => handleMouseEnter("project")}
            onMouseLeave={handleMouseLeave}
          >
            <RoughNotation
              type="underline"
              show={hoveredLink === "project"}
              color="#fff"
              animationDuration={1000}
              strokeWidth={3}
            >
              Projects
            </RoughNotation>
          </Link>
          <Link
            to="experience"
            className="text-lg font-bold"
            smooth={true}
            duration={500}
            onMouseEnter={() => handleMouseEnter("experience")}
            onMouseLeave={handleMouseLeave}
          >
            <RoughNotation
              type="underline"
              show={hoveredLink === "experience"}
              color="#fff"
              animationDuration={1000}
              strokeWidth={3}
            >
              Experience
            </RoughNotation>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
