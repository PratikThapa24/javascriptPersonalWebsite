import React from "react";
import RoughHighlight from "./RoughHighlight";

function ExperienceTimeline() {
  const experiences = [
    {
      company: "North Carolina State University",
      role: "Undergraduate Researcher",
      location: "Raleigh, NC",
      duration: "August 2023 - Present",
      description: [
        "Conducting research under the supervision of Dr. Man-Ki Yoon at North Carolina State University.",
        "Utilizing ROS2 and Python to develop a 1/16 scale self-driving car capable of lane-keeping, turning, and stop sign detection.",
        "Currently working on publishing a paper focused on localization techniques.",
        "Implementing a two-step localization process using Faster R-CNN combined with a feedforward neural network (FFNN) to predict the car's location based solely on images.",
        "Employing LiDAR technology for simultaneous localization and mapping (SLAM).",
      ],
    },
    {
      company: "Self-Employed",
      role: "Solopreneur",
      location: "Remote",
      duration: "Ongoing",
      description: [
        "Worked on full-scale projects from coding to production and deployment, handling all aspects of software development independently.",
        "Successfully deployed two websites: LetsStudyTogether.net, a platform designed to enhance study productivity, and LeetCodeJournal.com, a tool for journaling LeetCode solutions.",
        "Assisted individuals in creating their personal websites, providing guidance on design, development, and deployment.",
        "Gained extensive experience in end-to-end software development, from initial concept to live production environments.",
      ],
    },
  ];

  return (
    <div className="relative  w-screen mx-auto bg-custom-text-coolTeal bg-custom-bg-image min-h-screen px-4 text-custom-text-darkGray">
      <div className="container flex flex-col max-w-screen-lg mx-auto py-16">
        <div className="text-4xl font-extrabold tracking-wide text-center mb-10">
          <RoughHighlight>my experience</RoughHighlight>
        </div>
        <div className="relative scroll-animation border-l-4 border-custom-text-charcoal">
          {experiences.map((exp, index) => (
            <div className="mb-10 ml-6" key={index}>
              <div className="absolute w-6 h-6 bg-custom-text-charcoal rounded-full -left-3.5 top-1.5"></div>
              <div className="absolute w-6 h-6 bg-custom-text-charcoal rounded-full -left-3.5"></div>
              <div className="text-lg font-semibold">{exp.company}</div>
              <div className="text-sm text-gray-600">
                {exp.role} | {exp.location} | {exp.duration}
              </div>
              <ul className="list-disc pl-5 mt-2 text-gray-800">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {exp.link && (
                <a
                  href={exp.link}
                  className="text-custom-text-navyBlue underline mt-2 inline-block"
                >
                  View the open-source project my work was added to{" "}
                  {exp.linkText}.
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceTimeline;
