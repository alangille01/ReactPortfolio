import React, { useState } from "react";

function Project() {
  const [isProjectHover, setIsProjectHover] = useState();
  const [project] = useState([
    {
      title: "Weather Dashboard",
      technologies: "Javascript, CSS",
      description:
        "A React single-page application for information and signup, built for a startup application for baby gear resale.",
      repo_link: "https://github.com/alangille01/WeatherDashboard",
      deployed_link: "https://alangille01.github.io/WeatherDashboard/",
      image: "0.png",
    },
    {
      title: "Book Search Engine",
      technologies:
        "MongoDB, Express.js, Node.js, Apollo Server, JWT, Google Books API",
      description:
        "The Book Search Engine allows users to search for books using the Google Books API, save books to their personal profile, and view saved books.",
      repo_link: "https://github.com/alangille01/BookSearchEngine",
      deployed_link: "https://booksearchengine-7l7c.onrender.com/",
      image: "5.png",
    },
    {
      title: "Health & Fitness Tracker",
      technologies:
        "HTML, CSS, Javascript",
      description:
        "This is a health and fitness tracking page that allows users to track how much exercise they have done throughout the week and allows users to calculate how many calories they need to maintain based on their inputed information.",
      repo_link: "https://github.com/chxdior/Health-and-Fitness-Tracker-App",
      deployed_link: "https://chxdior.github.io/Health-and-Fitness-Tracker-App/",
      image: "1.png",
    },
    {
      title: "Task Board",
      technologies:
        "Javascript, HTML, CSS",
      description:
        "This application can be used to manage tasks for a project. They can be dragged and dropped into different status columns.",
      repo_link: "https://github.com/alangille01/Assignment5",
      deployed_link: "https://alangille01.github.io/Assignment5/Develop/",
      image: "2.png",
    },
    {
      title: "Note Taker",
      technologies: "Express.js, Javascript, HTML, CSS ",
      description:
        "This application allows you to create and manage notes on a web interface. The backend is managed in a JSON file.",
      repo_link: "https://github.com/alangille01/NoteTaker",
      deployed_link: "https://notetaker-08og.onrender.com/",
      image: "3.png",
    },
  ]);
  return (
    <div className="flex-row justify-space-between">
      {project.map((project, i) => (
        <div
          className={`col-12 col-md-6 mb-2 bg-secondary text-dark p-3 flex-column projects ${
            isProjectHover === i && "project-hover bg-light"
          }`}
          key={project.title}
          style={
            isProjectHover === i
              ? { backgroundImage: "none" }
              : {
                  backgroundImage: `url(${require(`../../assets/${project.image}`)}) `,
                }
          }
          onMouseEnter={() => setIsProjectHover(i)}
          onMouseLeave={() => setIsProjectHover()}
        >
          {isProjectHover === i && (
            <div className="px-2 pt-5 pb-4 flex-column project-content">
              <h3 className="portfolio-item-title text-dark">
                {project.title}
              </h3>
              <h5 className="portfolio-technologies">
                Built With: {project.technologies}
              </h5>
              <p>{project.description}</p>
              <a
                href={project.repo_link}
                className="btn w-50 text-center mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github mr-2"></i>View Project on GitHub
              </a>
              <a
                href={project.deployed_link}
                className="btn w-50 mt-0 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Deployed Application
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Project;