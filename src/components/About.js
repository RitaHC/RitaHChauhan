import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
             Rita H Chauhan
            <br className="hidden lg:inline-block" />
            
          </h1>
          <h1 className="sm:text-3xl text-white">Full Stack Developer</h1>
          <p className="mb-8 leading-relaxed">
          I am a Lawyer turned Software Engineer, having 4 years of legal experience as a corporate and intellectual property attorney. As a Software Developer in a short span of 6 months I’ve worked on various frameworks like, JavaScript, Golang, Python, React, Next.js, Express.js, Node.js, MySql, PostgreSql, MongoDB, Html & Css additionally on GitHub, Jira & bitbucket. I am a highly motivated individual with a track record of success in handling high-stakes matters with precision and efficiency, making me an ideal candidate for any organization looking for a driven, results-oriented individual. Moreover, my aptitude for learning and adapting to new environments allows me to excel in collaborative settings and be a team player.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Hire Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg  rounded-l rounded-r">
          <img
            className="object-cover max-h-80"
            alt="hero"
            src="./avatar.png"
            
          />
        </div>
      </div>
    </section>
  );
}