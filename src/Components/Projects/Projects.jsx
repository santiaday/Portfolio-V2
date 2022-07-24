import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./projectStyles.css";

function Projects({}) {
  const [hovering1, setHovering1] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  const [hovering3, setHovering3] = useState(false);
  const [hovering4, setHovering4] = useState(false);
  const [hovering5, setHovering5] = useState(false);
  const [hovering6, setHovering6] = useState(false);

  return (
    <div
      className="projectsPageContainer"
      style={{
        position: "aboslute",
        zIndex: 95,
      }}
    >
      <div className="projectsHeaderContainer">
        <Typography
          variant="h1"
          style={{ fontWeight: "700", backgroundColor: "transparent" }}
        >
          Projects
        </Typography>
      </div>

      <div class="row">
        <div
          class="column project1 flip-card"
          onMouseEnter={() => setHovering1(true)}
          onMouseLeave={() => setHovering1(false)}
        >
          <div className="flip-card-inner">
            <div class="flip-card-front">
              <Typography
                class="projectTitles"
              >
                Personal Website
              </Typography>
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        <div
          class="column project2"
          onMouseEnter={() => setHovering2(true)}
          onMouseLeave={() => setHovering2(false)}
        >
          <Typography
            class={!hovering2 ? "projectTitles" : "projectTitlesHovering"}
          >
            Rule Framework Manager
          </Typography>
        </div>
        <div
          class="column project3"
          onMouseEnter={() => setHovering3(true)}
          onMouseLeave={() => setHovering3(false)}
        >
          <Typography
            class={!hovering3 ? "projectTitles" : "projectTitlesHovering"}
          >
            Ecommerce Website
          </Typography>
        </div>
      </div>
      <div class="row">
        <div
          class="column project4"
          onMouseEnter={() => setHovering4(true)}
          onMouseLeave={() => setHovering4(false)}
        >
          <Typography
            class={!hovering4 ? "projectTitles" : "projectTitlesHovering"}
          >
            Original Website
          </Typography>
        </div>
        <div
          class="column project5"
          onMouseEnter={() => setHovering5(true)}
          onMouseLeave={() => setHovering5(false)}
        >
          <Typography
            class={!hovering5 ? "projectTitles" : "projectTitlesHovering"}
          >
            Multi-Threaded Word Search
          </Typography>
        </div>
        <div
          class="column project6"
          onMouseEnter={() => setHovering6(true)}
          onMouseLeave={() => setHovering6(false)}
        >
          <Typography
            class={!hovering6 ? "projectTitles" : "projectTitlesHovering"}
          >
            House Of Horrors Game
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Projects;
