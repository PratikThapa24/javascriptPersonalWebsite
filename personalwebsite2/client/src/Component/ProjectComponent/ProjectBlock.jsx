import React, { useState, useEffect } from "react";
import SkillBox from "../SkillsComponent/SkillBox";
import Modal from "./Modal";
import GitHubIcon from "@mui/icons-material/GitHub";
import DisplayHTMLContent from "../DisplayHtmlContent";

function ProjectBlock({
  imagePath,
  projectTitle,
  sk1,
  sk2,
  sk3,
  projectDescription,
  githubLink,
  websiteLink,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Project Block */}
      <div
        className="p-5 h-4/5 w-full mx-auto flex flex-col justify-between items-center rounded-md shadow-lg cursor-pointer"
        onClick={toggleModal}
      >
        {/* Front Side of card */}
        <div className="w-full h-60 bg-white border-4 border-custom-text-charcoal rounded-lg ">
          <img
            className="object-cover w-full h-full"
            src={imagePath}
            alt={projectTitle}
          />
        </div>
        {/* Project Name */}
        <div className="text-xl mt-2 font-bold text-custom-text-charcoal tracking-wide text-center">
          {projectTitle}
        </div>
        {/* Software Used To Create */}
        <div className="justify-center text-center mt-2 space-x-2 space-y-2">
          <SkillBox skillName={sk1} />
          <SkillBox skillName={sk2} />
          <SkillBox skillName={sk3} />
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} title={projectTitle}>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col justify-center items-center">
            {/* Image on the left */}
            <div className="w-1/2 h-60 justify-center text-center items-center">
              <img
                className="w-full h-48 md:h-full rounded-lg"
                src={imagePath}
                alt="Project Image"
              />
            </div>

            {/* Description on the right */}
            <div className="m-6 ">
              <p
                className="text-base leading-relaxed text-custom-text-softBlack"
                style={{ maxHeight: "400px", overflowY: "auto" }} // Adjust maxHeight as needed
              >
                {/* {projectDescription} */}
                <DisplayHTMLContent content={projectDescription} />
              </p>
            </div>
          </div>

          <div>
            {/* Links to GitHub and Website */}
            <div className="flex flex-row space-x-4 items-center justify-center">
              {/* GitHub Link */}
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-text-softBlack hover:text-custom-text-navyBlue"
              >
                <GitHubIcon />
              </a>
              {/* Website Link */}
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-text-softBlack hover:text-custom-text-navyBlue"
              >
                <i className="fas fa-globe text-2xl"></i>
                <span className="ml-2">Visit Website</span>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProjectBlock;
