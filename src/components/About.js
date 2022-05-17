import React from "react";

function About(props) {

  let bioElement = null;
  if (props.bio) {
    bioElement = <p>{props.bio}</p>
  } 
  return (
      <div id="about">
        <h2>About Me</h2>
        {bioElement}
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
        <h3>Links</h3>
        <a href="{props.links.github}">https://github.com/liza</a>
        <a href="{props.links.linkedin}">https://www.linkedin.com/in/liza/</a>
      </div>
    );
}
 

export default About;
