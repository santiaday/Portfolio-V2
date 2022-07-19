import useStyles from "./navbarStyles.js";
import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./navbarStyles.css";
import {BsGithub, BsLinkedin} from "react-icons/bs"

function IntroAnimation({ }) {

  const [changeBackground, setChangeBackground] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', pop);
  
    return () => window.removeEventListener('scroll', pop);
  },[]);

  const pop = () => {
    if (window.scrollY >= 125) {
      document.getElementById("navContainer").classList.replace("colorBackgroundNavbarFadeOut" , "colorBackgroundNavbarFadeIn")
    }

    if (window.scrollY <= 125) {
      document.getElementById("navContainer").classList.replace("colorBackgroundNavbarFadeIn" , "colorBackgroundNavbarFadeOut")

      
    }
        
    console.log(window.scrollY)
  }




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
    <div id="navContainer" className="navbarContainer">
        <div className="nameLeft"><Typography variant="h6" style={{backgroundColor: "inherit"}}><span style={{fontWeight: "700", backgroundColor: "inherit"}}>SANTIAGO</span><span style={{fontWeight: "500", backgroundColor: "inherit"}}>ADAY</span></Typography></div>
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
            <a href="https://github.com/santiaday" target="_blank"><BsGithub style={{fontSize: "1.3rem", backgroundColor: "inherit"}}/></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/santiagoaday/" target="_blank"><BsLinkedin style={{fontSize: "1.3rem" , backgroundColor: "inherit"}} /></a>
          </li>
        </ul></div>
    </div>
  );
}

export default IntroAnimation;
