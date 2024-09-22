import React, { useState } from "react";

import profilePic from "../../assets/profile.png";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="text-light" id="about">
      <div className=" flex-row px-3 py-5 justify-space-around">
        <div className="my-auto px-auto col-5">
          <h1 className="intro">Hi, I'm Alexis Langille!</h1>
          <h5>A full-stack engineer based in Toronto Canada</h5>
          <div className="text-center">
            <button
              onClick={() => setShowMore(true)}
              className={`btn my-5 ${showMore === true && "display-none"}`}
            >
              Read More
            </button>
          </div>
        </div>
        <img
          src={profilePic}
          className="my-4 col-10 col-md-4"
          alt="headshot"
          width="100px"
        />
      </div>

      <div className={`px-3 ${showMore === false && "display-none"}`}>
        <h2 className="py-2">About Me</h2>
        <p className="mb-2" id="about-text">
          {/**Hello world! My name is Alexis and I am fairly new to computer science but thoroughly enjoying it so far. I got interested in it as my current job has a website and employs a good amount of programmers to work in keeping it running. I spend my free time writing poetry, exercising, and binge watching comedy and drama shows. I look forward to graduating my course and starting my journey in my new career! */}
          Hello world! My name is Alexis and I am fairly new to computer science but thoroughly enjoying it so far. I got interested in it as my current job has a website and employs a good amount of programmers to work in keeping it running. I spend my free time writing poetry, exercising, and binge watching comedy and drama shows. I look forward to graduating my course and starting my journey in my new career! 
        </p>
      </div>
    </section>
  );
}

export default About;