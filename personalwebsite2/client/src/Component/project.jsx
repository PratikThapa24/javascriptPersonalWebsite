import React from "react";
import ProjectBlock from "./ProjectComponent/ProjectBlock";
import RoughHighlight from "./RoughHighlight";

const projects = {
  // Format ["imagePath", "projectTitle", "sk1", "sk2", "sk3", "projectDescription", "githubLink", "websiteLink"
  1: [
    "letsStudyTogether.png",
    "LetsStudyTogether",
    "React",
    "Express",
    "Javascript",
    ` <p><strong>A web application that helps students log hours of their studies.</strong></p>
    </br>
    <p>It features options for tracking study hours, receiving rankings on a global leaderboard, sending and accepting study requests, changing wallpapers, and much more. Visit the website and check the 'About' section to learn more about these features.</p>
    </br>
    <p>LetsStudyTogether has helped over 100 active users stop procrastination and increase productivity.</p>
    </br>
    <p>This application was hosted using AWS EC2.</p>`,
    "https://github.com/SyntaxErrorThapa/LetsStudyTogether",
    "https://www.letsstudytogether.net",
  ],
  2: [
    "leetcodeBlog.png",
    "LeetCode Journal",
    "React",
    "Express",
    "Javascript",
    ` <p><strong>A web application that helps students journal their LeetCode solutions.</strong></p>
    </br>
    <p>We all know the frustration of being able to solve a LeetCode problem, only to come back a month later and struggle to solve it again. This application addresses that issue by keeping track of all the solutions you've solved so far.</p>
    </br>
    <p>Students can post their solutions along with a PDF if they sketched the solution using an iPad. The application initially provides the top 100 most frequently asked questions, with a sorting function. This feature allows users to sort the questions and focus on the categories where they need the most improvement.</p>
    </br>
    <p>This web application was hosted using AWS Lightsail.</p>`,
    "https://github.com/SyntaxErrorThapa/leetcode-blog",
    "https://www.leetcodejournal.com",
  ],
  3: [
    "jobLogify.png",
    "Job Logify",
    "React",
    "Express",
    "Javascript",
    `<p><strong>LogJobify</strong> aims to enhance productivity and organization in the job search process. With a focus on user experience, the platform offers an intuitive GUI that displays all necessary job information at a glance.</p>
    </br>
    <p>Users can easily track their applications, view market listings, and manage their job search with minimal effort.</p>
    </br>
    <ul>
      <li><strong>Sign Up:</strong> Users create an account to start tracking their job applications.</li>
      </br>
      <li><strong>Log Jobs:</strong> With one click, users can log the details of the jobs they have applied for, including company name, position, application date, and status.</li>
      </br>
      <li><strong>View Listings:</strong> Users can browse through comprehensive job listings from various markets directly within the platform.</li>
      </br>
      <li><strong>Manage Applications:</strong> Users can view, edit, or delete their logged applications, keeping their job search organized and up-to-date.</li>
    </ul>`,
    "https://github.com/SyntaxErrorThapa/JobLogify",
    "https://www.pratikthapa.com",
  ],
  4: [
    "personalBlog.png",
    "Personal Blog",
    "Flask",
    "SQLite",
    "Python",
    `<p><strong>This project was one of the highlights of my 100 Days of Code course on Udemy, taught by Dr. Angela Yu.</strong> Through this project, I gained hands-on experience with the Flask framework.</p>
    </br>
    <p>I learned how to build dynamic web applications, create routes, and work with APIs. Additionally, I developed a deeper understanding of integrating databases with SQLite to manage content efficiently.</p>
    </br>
    <p>The Personal Blog project allowed me to implement user authentication, enabling users to register, log in, and post their own blog entries. I also learned how to style the application using CSS to create a clean and user-friendly interface.</p>
    </br>
    <p>This project not only improved my technical skills but also taught me the importance of planning and structuring a web application from start to finish.</p>
    `,
    "https://github.com/SyntaxErrorThapa/personalWebsite",
    "https://www.pratikthapa.com",
  ],
  5: [
    "robotThatPlaySoccer.jpg",
    "Robot That Plays Soccer",
    "TensorFlow",
    "Python",
    "Convolutional Neural Network",
    `<p><strong>The main purpose of this project was to dive deep into the world of Convolutional Neural Networks (CNNs) by getting hands-on experience.</strong></p>
    </br>
    <p>To achieve this, I took on the challenge of building a robot from scratch. I started by assembling the hardware, which included a Raspberry Pi, a camera chassis, and various circuit components. Through this process, I gained practical knowledge of circuitry and the fundamentals of robotics.</p>
    </br>
    <p>On the software side, I focused on creating a CNN model from the ground up. This involved not only understanding the theoretical underpinnings of neural networks but also implementing them in a real-world scenario.</p>
    </br>
    <p>The result was a functional robot capable of processing visual data and making decisions based on the model I developed.</p>
    </br>
    <p>If you’re curious to see how the robot works, feel free to click the link to the website for a detailed demonstration.</p>
    `,
    "https://github.com/SyntaxErrorThapa/Object_face_detection_rover",
    "https://youtu.be/tP2XV6Mckto?si=FJ96s6NSuJzC-5HV",
  ],
  6: [
    "spotifyPlaylistMaker.jpg",
    "Spotify Playlist Maker",
    "Python",
    "BeautifulSoup",
    "Spotipy",
    `<p><strong>This project allows users to create their own Spotify playlists by web scraping the top 100 songs from the Billboard charts.</strong></p>
    </br>
    <p>Using Python, I implemented web scraping techniques to gather the latest data from the Billboard website. The program then seamlessly integrates with Spotify’s API to create a personalized playlist based on the scraped songs.</p>
    </br>
    <p>In addition to web scraping, this project involved working with various Python libraries, such as <strong>BeautifulSoup</strong> for parsing HTML, <strong>Spotipy</strong> for interacting with Spotify’s API, and <strong>Pygame</strong> for handling any additional multimedia features.</p>
    </br>
    <p>The result is a user-friendly tool that makes it easy to stay up-to-date with the latest hits and curate a playlist with just a few clicks.</p>
    `,
    "https://github.com/SyntaxErrorThapa/make-spotify-playlist",
    "https://github.com/SyntaxErrorThapa/make-spotify-playlist",
  ],
  7: [
    "personalWebsite.png",
    "Personal Website",
    "React",
    "Javascript",
    "TailWindCSS",
    `
    <p><strong>This personal website</strong> is a comprehensive portfolio that not only showcases all the projects I've completed but also offers insights into my journey as a developer.</p>
    </br>
    <p>It highlights my <strong>experiences</strong>, <strong>skills</strong>, and <strong>educational background</strong>, giving visitors a clear understanding of who I am and what I bring to the table.</p>
    </br>
    <p>The website serves as a <em>digital resume</em>, where I delve into my passion for coding, my approach to problem-solving, and the various technologies I've mastered.</p>
    </br>
    <p>It's designed to be a reflection of my commitment to continuous learning and my drive to create impactful software solutions.</p>
  `,
    "https://github.com/SyntaxErrorThapa/javascriptPersonalWebsite",
    "https://www.pratikthapa.com",
  ],
  8: [
    "wolfScheduler.png",
    "Wolf Scheduler",
    "Java",
    "Junit",
    "Object Oriented Programming",
    `<p><strong>This is my Wolf Scheduler project</strong>, a Java application that showcases the principles of Object-Oriented Programming (OOP) through the implementation of <em>unit testing</em>, <em>system testing</em>, <em>inheritance</em>, <em>polymorphism</em>, <em>abstract classes</em>, and <em>interfaces</em>.</p>
    </br>
    <p>The application utilizes file I/O to read course data from a CSV file and imports it into a catalog from which users can select courses.</p>
    </br>
    <p>Users can then create and export their own custom schedules, adding events like lunch breaks alongside their selected courses.</p>
    </br>
    <p>The scheduler includes built-in rules to ensure valid schedule creation, such as preventing users from enrolling in the same class more than once or scheduling overlapping events.</p>
    </br>
    <p>This project marked my first introduction to inheritance and interfaces, and it taught me how to organize class files into a structured hierarchy, significantly reducing redundancy and improving code maintainability.</p>
    </br>
    <p>This project was originally developed and hosted on my school’s GitHub account.</p>
    `,
    "https://github.com/SyntaxErrorThapa/WolfScheduler",
    "",
  ],
};

function Project() {
  return (
    <>
      <div className="relative container mx-auto text-4xl font-extrabold text-custom-text-charcoal mt-12 text-center">
        <RoughHighlight>projects</RoughHighlight>
      </div>
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 min-h-screen px-4 items-center">
        {Object.entries(projects).map(([key, value]) => {
          return (
            <ProjectBlock
              key={key}
              imagePath={value[0]}
              projectTitle={value[1]}
              sk1={value[2]}
              sk2={value[3]}
              sk3={value[4]}
              projectDescription={value[5]}
              githubLink={value[6]}
              websiteLink={value[7]}
            />
          );
        })}
      </div>
    </>
  );
}

export default Project;
