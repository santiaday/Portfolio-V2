import useStyles from "./introAnimationStyles.js"
import React, { useState, useEffect } from "react";
import { Container, Typography, Button } from "@material-ui/core";

function IntroAnimation() {
  const classes = useStyles()
  const [text, setText] = useState("");
  const [textFinished, setTextFinished] = useState(false)
  const [fullText, setFullText] = useState(
    "I love you <3 pls be happy"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length && !textFinished) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 80)
    }

    if(index == fullText.length){
        setTimeout(() => {
            setTextFinished(true)
        }, 500)
        
    }

    if (index >= 0 && textFinished) {
        setTimeout(() => {
            console.log(text)
          setText(text.substring(0,index))
          setIndex(index - 1)
        }, 40)
      }
  }, [index, textFinished])

  return <div className={classes.introTextDiv}>
      <Typography variant="h1" className={classes.introText}>
        {text} <span style={{display: "inline-block" , transform: "translateY(-4px)", color: "#FF6A3D"}}>|</span>
      </Typography>
      </div>;
}

export default IntroAnimation;
