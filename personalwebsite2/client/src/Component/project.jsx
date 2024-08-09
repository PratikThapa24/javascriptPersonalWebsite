import React from "react";
import ProjectBlock from "./ProjectComponent/ProjectBlock";

const projects = {
  // Format ["imagePath", "projectTitle", "sk1", "sk2", "sk3", "projectDescription", "githubLink", "websiteLink"
  1: [
    "letsStudyTogether.png",
    "LetsStudyTogether",
    "React",
    "Express",
    "Javascript",
    `A web application that helps students log hours of their studies.
    Has features such as getting the rank in the world of the users, able to send request and accept. Change wallpaper and many more check the website and visit about to know more feature. 
    Has helped 100 active users to stop procasination and increase the productivity.
    This application was hosted using AWS EC2.`,
    "https://github.com/SyntaxErrorThapa/LetsStudyTogether",
    "https://www.letsstudytogether.net",
  ],
  2: [
    "leetcodeBlog.png",
    "LeetCode Journal",
    "React",
    "Express",
    "Javascript",
    `A web application that helps students journal their LeetCode solutions. 
    We all know the frustration of being able to solve a LeetCode problem, only to come back a month later and struggle to solve it again.
    This application addresses that issue by keeping track of all the solutions you've solved so far. 
    Students can post their solutions along with a PDF if they sketched the solution using an iPad. The application initially provides the top 100 most frequently asked questions, with a sorting function. This feature allows users to sort the questions and focus on the categories where they need the most improvement.
    This web application was hosted using AWS lightsail`,
    "https://github.com/SyntaxErrorThapa/leetcode-blog",
    "https://www.leetcodejournal.com",
  ],
  3: [
    "jobLogify.png",
    "Job Logify",
    "React",
    "Express",
    "Javascript",
    `LogJobify aims to enhance productivity and organization in the job search process. With a focus on user experience, the platform offers an intuitive GUI that displays all necessary job information at a glance. 
    Users can easily track their applications, view market listings, and manage their job search with minimal effort. Sign Up: Users create an account to start tracking their job applications.
    Log Jobs: With one click, users can log the details of the jobs they have applied for, including company name, position, application date, and status.
    View Listings: Users can browse through comprehensive job listings from various markets directly within the platform.
    Manage Applications: Users can view, edit, or delete their logged applications, keeping their job search organized and up-to-date.`,
    "https://github.com/SyntaxErrorThapa/JobLogify",
    "https://www.pratikthapa.com",
  ],
  4: [
    "personalBlog.png",
    "Personal Blog",
    "Flask",
    "SQLite",
    "Python",
    `This project was one of the highlights of my 100 Days of Code course on Udemy, taught by Dr. Angela Yu. Through this project, I gained hands-on experience with the Flask framework. 
    I learned how to build dynamic web applications, create routes, and work with APIs. 
    Additionally, I developed a deeper understanding of integrating databases with SQLite to manage content efficiently.
    The Personal Blog project allowed me to implement user authentication, enabling users to register, log in, and post their own blog entries. 
    I also learned how to style the application using CSS to create a clean and user-friendly interface. This project not only improved my technical skills but also taught me the importance of planning and structuring a web application from start to finish.`,
    "https://github.com/SyntaxErrorThapa/personalWebsite",
    "https://www.pratikthapa.com",
  ],
  5: [
    "robotThatPlaySoccer.jpg",
    "Robot That Plays Soccer",
    "TensorFlow",
    "Python",
    "Convolutional Neural Network",
    `The main purpose of this project was to dive deep into the world of Convolutional Neural Networks (CNNs) by getting hands-on experience. 
    To achieve this, I took on the challenge of building a robot from scratch. 
    I started by assembling the hardware, which included a Raspberry Pi, a camera chassis, and various circuit components. 
    Through this process, I gained practical knowledge of circuitry and the fundamentals of robotics.
    On the software side, I focused on creating a CNN model from the ground up.
    This involved not only understanding the theoretical underpinnings of neural networks but also implementing them in a real-world scenario. 
    The result was a functional robot capable of processing visual data and making decisions based on the model I developed.
    If you’re curious to see how the robot works, feel free to click the link to the website for a detailed demonstration.`,
    "https://github.com/SyntaxErrorThapa/Object_face_detection_rover",
    "https://youtu.be/tP2XV6Mckto?si=FJ96s6NSuJzC-5HV",
  ],
  6: [
    "spotifyPlaylistMaker.jpg",
    "Spotify Playlist Maker",
    "Python",
    "BeautifulSoup",
    "Spotipy",
    `This project allows users to create their own Spotify playlists by web scraping the top 100 songs from the Billboard charts. 
  Using Python, I implemented web scraping techniques to gather the latest data from the Billboard website. 
  The program then seamlessly integrates with Spotify’s API to create a personalized playlist based on the scraped songs.
  In addition to web scraping, this project involved working with various Python libraries, such as BeautifulSoup for parsing HTML, Spotipy for interacting with Spotify’s API, and Pygame for handling any additional multimedia features. 
  The result is a user-friendly tool that makes it easy to stay up-to-date with the latest hits and curate a playlist with just a few clicks.`,
    "https://github.com/SyntaxErrorThapa/make-spotify-playlist",
    "https://github.com/SyntaxErrorThapa/make-spotify-playlist",
  ],
  7: [
    "personalWebsite.png",
    "Personal Website",
    "React",
    "Javascript",
    "TailWindCSS",
    `This personal website is a comprehensive portfolio that not only showcases all the projects I've completed but also offers insights into my journey as a developer. 
    It highlights my experiences, skills, and educational background, giving visitors a clear understanding of who I am and what I bring to the table.
    The website serves as a digital resume, where I delve into my passion for coding, my approach to problem-solving, and the various technologies I've mastered. 
    It's designed to be a reflection of my commitment to continuous learning and my drive to create impactful software solutions.`,
    "https://github.com/SyntaxErrorThapa/javascriptPersonalWebsite",
    "https://www.pratikthapa.com",
  ],
  8: [
    "wolfScheduler.png",
    "Wolf Scheduler",
    "Java",
    "Junit",
    "Object Oriented Programming",
    `This is my Wolf Scheduler project, a Java application that showcases the principles of Object-Oriented Programming (OOP) through the implementation of unit testing, system testing, inheritance, polymorphism, abstract classes, and interfaces. 
    The application utilizes file I/O to read course data from a CSV file and imports it into a catalog from which users can select courses. 
    Users can then create and export their own custom schedules, adding events like lunch breaks alongside their selected courses.
    The scheduler includes built-in rules to ensure valid schedule creation, such as preventing users from enrolling in the same class more than once or scheduling overlapping events.
    This project marked my first introduction to inheritance and interfaces, and it taught me how to organize class files into a structured hierarchy, significantly reducing redundancy and improving code maintainability.
    This project was originally developed and hosted on my school’s GitHub account.`,
  ],
};

function Project() {
  return (
    <>
        <div className="relative container mx-auto text-4xl font-extrabold text-custom-text-charcoal mt-12 text-center">
            projects
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
