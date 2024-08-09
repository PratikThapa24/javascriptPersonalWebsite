import React from "react";
import SkillsBlock from "./SkillsBlock"

const languages = ["Python", "Java", "C/C++", "JavaScript", "Bash"];
const front_end_development = [
  "React",
  "Bootstrap",
  "Tailwind",
  "Sass",
  "CSS",
  "HTML",
];
const back_end_development = ["Node.js", "Express", "Flask"];
const machine_learning_framework = [
  "TensorFlow",
  "OpenCV",
  "PyTorch",
  "Pandas",
  "scikit-learn",
];
const database = ["MySQL", "PostgreSQL", "SQLite"];
const devops = ["AWS", "Bash", "Amazon EC2", "Amazon Lightsail"];
const others = ["Linux", "Git", "Arduino"];

function Skills() {
  return (
    <>
      {/* Skills section */}
      <div id="skill" className="justify-center w-1/2 flex flex-col">
        <div className="text-4xl font-extrabold tracking-widest">skills</div>

        {/* Languages */}
        <SkillsBlock title="languages" skill={languages} />

        {/* Front-end Development */}
        <SkillsBlock
          title="front end development"
          skill={front_end_development}
        />

        {/* Back-end Development */}
        <SkillsBlock
          title="back end development"
          skill={back_end_development}
        />

        {/* Machine Learning Framework */}
        <SkillsBlock
          title="machine learning framework"
          skill={machine_learning_framework}
        />

        {/* Database Management */}
        <SkillsBlock title="database" skill={database} />

        {/* Devops */}
        <SkillsBlock title="devops" skill={devops} />

        {/* Others */}
        <SkillsBlock title="others" skill={others} />
      </div>
    </>
  );
}

export default Skills;
