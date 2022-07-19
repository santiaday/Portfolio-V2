import useStyles from "./aboutMePageStyles.css";
import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./aboutMePageStyles";

function AboutMePage({}) {
  useEffect(() => {
    const doc = document.querySelector(".landingPageContainer");


    doc.addEventListener("mousemove", (e) => {
      doc.style.backgroundPositionX = -e.offsetX / 100 + "px";
      doc.style.backgroundPositionY = -e.offsetY / 100 + "px";
    });



  });


  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
  }, []);

  return (
      <div className="aboutMePageContainer" style={{ position: "aboslute" , transform: `translateY(-${offsetY * 4.0}px)` , zIndex: 95,}}>

      </div>
  );
}

export default AboutMePage;
