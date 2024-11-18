import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render the <p> tag if bio exists and is non-empty */}
      {bio && <p>{bio}</p>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* Add the <Links /> component and pass github and linkedin as props */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;