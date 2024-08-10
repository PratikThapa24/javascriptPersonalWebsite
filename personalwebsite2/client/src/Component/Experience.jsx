import React from "react";

function Experience() {
  return (
    <>
      <div className="relative w-screen mx-auto bg-custom-text-coolTeal bg-custom-bg-image min-h-screen px-4 text-custom-text-darkGray">
        <div className="container flex flex-col max-w-screen-lg mx-auto py-16 text-center justify-center">
          {/* Experience Heading */}
          <div className="text-4xl font-extrabold tracking-widest mb-8">
            experience
          </div>
          
          {/* GitHub Stats Image */}
          <div className="flex justify-center">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=SyntaxErrorThapa&show_icons=true&theme=radical" 
              alt="Pratik's GitHub stats"
              className="max-w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
