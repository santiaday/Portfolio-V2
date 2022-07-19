
import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./experiencePageStyles.css"
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function ExperiencePage({}) {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    }, []);

    const useStyles = makeStyles({
        timeline: {
          transform: "rotate(90deg)"
        },
        timelineContentContainer: {
          textAlign: "left"
        },
        timelineContent: {
          display: "inline-block",
          transform: "rotate(-90deg)",
          textAlign: "center",
          minWidth: 50
        },
        timelineIcon: {
          transform: "rotate(-90deg)"
        }
      });



  return (
    <div
    className="experiencePageContainer"
      style={{
        position: "aboslute",
        transform: `translateY(-${offsetY * 1.5}px)`,
        zIndex: 95,
      }}
    >
      <div className="experienceHeaderContainer"><Typography variant="h1" style={{fontWeight: "700", backgroundColor: "transparent"}}>Experience</Typography></div>
      <Timeline style={{marginTop: "60px"}} >
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot sx={{borderColor: "#282c34"}} variant="outlined"/>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Secondary</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot sx={{borderColor: "#282c34"}} variant="outlined"/>
    </TimelineSeparator>
    <TimelineContent>Success</TimelineContent>
  </TimelineItem>
</Timeline>
    </div>
  );
}

export default ExperiencePage;
