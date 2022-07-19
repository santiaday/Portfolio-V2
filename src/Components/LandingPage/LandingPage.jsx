import useStyles from "./landingPageStyles.js";
import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./landingPageStyles.css";

function IntroAnimation({}) {
  useEffect(() => {
    const doc = document.querySelector(".landingPageContainer");


    doc.addEventListener("mousemove", (e) => {
      doc.style.backgroundPositionX = -e.offsetX / 100 + "px";
      doc.style.backgroundPositionY = -e.offsetY / 100 + "px";
    });



  });

  return (
      <div className="landingPageContainer">
        <div className="welcomeMessage">
          Full-Stack
          <br /> Software <br /> Engineer
        </div>
        <div class="shellClass" style={{ position: "absolute" ,pointerEvents: "none", backgroundColor:"transparent"}}>
          <button class="btn btn-background-slide" style={{width: "250px", height: "65px", marginTop: "350px"}}><span style={{backgroundColor: "transparent", fontSize: "18px"}}>Learn More</span></button>
        </div>
      </div>
  );
}

export default IntroAnimation;
