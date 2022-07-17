import useStyles from "./navbarStyles.js";
import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./navbarStyles.css";
import {BsGithub, BsLinkedin} from "react-icons/bs"

function IntroAnimation({ }) {
  const classes = useStyles();

  const handleClick = (index) => {
    if(index == 1){
        console.log("about")
    }

    if(index == 2){
        console.log("experience")
    }

    if(index == 3){
        console.log("project")
    }

    if(index == 4){
        console.log("contact")
    }
  }

  return (
    <div className="navbarContainer">
        <div className="nameLeft"><Typography variant="h6"><span style={{fontWeight: "700"}}>SANTIAGO</span><span style={{fontWeight: "500"}}>ADAY</span></Typography></div>
        <div className="namesRight">       <ul>
          <li>
            <a onClick={() => handleClick(1)}>ABOUT</a>
          </li>
          <li>
            <a onClick={() => handleClick(2)}>EXPERIENCE</a>
          </li>
          <li>
            <a onClick={() => handleClick(3)}>PROJECTS</a>
          </li>
          <li>
            <a onClick={() => handleClick(4)}>CONTACT</a>
          </li>
          <li>
            <a href="https://github.com/santiaday" target="_blank"><BsGithub style={{fontSize: "1.3rem"}}/></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/santiagoaday/" target="_blank"><BsLinkedin style={{fontSize: "1.3rem"}} /></a>
          </li>
        </ul></div>
    </div>
  );
}

export default IntroAnimation;
