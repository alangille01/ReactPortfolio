import React, { useState } from "react";
import resume from "../../assets/AlexisLangilleResume.pdf";

function Resume() {
  const [resumeLinks] = useState([
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/alexis-l-86b03522a/?originalSubdomain=ca",
    },
    {
      name: "GitHub",
      link: "https://github.com/alangille01",
    },
    {
      name: "Email",
      link: "mailto:langille.alexis@gmail.com",
    },
  ]);

  return (
    <section className="my-5">
      <h2>Resume</h2>

      {/* Button to download resume */}
      <div className="button-container flex-row justify-center align-center mt-3 mb-5">
        <a href={resume} download="AlexisLangilleResume.pdf" className="btn mx-2">
          Resume
        </a>
        {resumeLinks.map((item) => (
          <a
            className="btn mx-2"
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        ))}
      </div>

      <p className="my-5">
        Full-stack web developer, with recent Coding Bootcamp completion
        certificate. Experience building MERN stack applications. Highly
        analytical, motivated and skilled at solving programming problems. Work
        well both independently and in a team environment.
      </p>
      <h5>Frontend:</h5>
      <p>
        ReactJS, HTML5, CSS, Responsive Design, Javascript, jQuery, Bootstrap
      </p>
      <h5>Backend:</h5>
      <p>MySQL, ORM, MongoDB, Express, Node, Handlebars, GraphQL, Webpack</p>
      <h5>Education:</h5>
      <p>
        Full-Stack Coding Bootcamp,{" "}
        <span className="italic">University of Toronto EdX</span>
        <br />
        Bachelors of Arts - BA, Political Sciences,{" "}
        <span className="italic">University of Toronto</span>
      </p>
      
      {/* PDF rendered on the page */}
      <div className="pdf-container">
        <iframe
          src={resume}
          title="Alexis Langille Resume"
          width="100%"
          height="600px"
        />
      </div>
    </section>
  );
}

export default Resume;
