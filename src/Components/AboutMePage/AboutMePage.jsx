import useStyles from "./aboutMePageStyles.css";
import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./aboutMePageStyles";
import "./aboutMePageStyles.scss"

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
    <div
      className="aboutMePageContainer"
      style={{
        position: "aboslute",
        transform: `translateY(-${offsetY * 1.5}px)`,
        zIndex: 95,
      }}
    >
      <div className="aboutMeHeader">
        <Typography variant="h1" className="aboutMeText">
          About Me
        </Typography>
      </div>
      <div class="row">
        <div class="column">
        <Typography class="aboutMeParagraph" >
        My name is Santiago Aday and I am currently a full-time Computer Science student at Florida International University, on track to graduate in Spring 2023 with my Bachelor’s Degree. Some of my key qualifications include:
<ul style={{backgroundColor: "#282c34"}}>
<li style={{backgroundColor: "#282c34"}}>Contributing specialty in <span style={{color: "#FF6A3D", fontWeight: "700", background: "#282c34"}}>front-end development</span>, search engine optimization, graphic design and audio/video integration to launch <span style={{color: "#FF6A3D", fontWeight: "700", background: "#282c34"}}>custom-tailored code</span> for website presence.</li>
<li style={{backgroundColor: "#282c34"}}>Detailed understanding of complex, up-to-date <span style={{color: "#FF6A3D", fontWeight: "700", background: "#282c34"}}>programming languages, standards, and best practices.</span></li>
<li style={{backgroundColor: "#282c34"}}>Innovative approach to meeting business needs with <span style={{color: "#FF6A3D", fontWeight: "700", background: "#282c34"}}>backend</span> and <span style={{color: "#FF6A3D", fontWeight: "700", background: "#282c34"}}>frontend development</span></li>
<li style={{backgroundColor: "#282c34"}}>Resourceful navigation of intricate factors governing <span style={{color: "#FF6A3D", fontWeight: "700", background: "#282c34"}}>web planning, security, SEO, and launch.</span></li>
</ul>

I have maintained very high honors throughout my college career, holding onto a 3.9 GPA and making it onto the Dean’s list every semester. In addition to this, I have years of experience in full-stack development, mastering the product lifecycle and becoming familiar with agile workflows.
</Typography>
        </div>
        <div class="column">
        <div className="container">
        <h1 style={{color: "#F4EAE3"}}>Technologies</h1>
        <div className="progressbar-container">
            
          <div className="progressbar-complete" style={{width: "85%"}}>
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress">Java</span>
        </div>
        <div className="progressbar-container" style={{marginTop: "25px"}}>
          <div className="progressbar-complete" style={{width: "80%"}}>
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress">JavaScript</span>
        </div>
        <div className="progressbar-container" style={{marginTop: "25px"}}>
          <div className="progressbar-complete" style={{width: "69%"}}>
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress">HTML/CSS</span>
        </div>
        <div className="progressbar-container" style={{marginTop: "25px"}}>
          <div className="progressbar-complete" style={{width: "50%"}}>
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress">AWS</span>
        </div>
        <div className="progressbar-container" style={{marginTop: "25px"}}>
          <div className="progressbar-complete" style={{width: "30%"}}>
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress">C/Python</span>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
