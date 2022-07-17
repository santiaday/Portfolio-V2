import useStyles from "./introAnimationStyles.js";
import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./introAnimationStyles.css";
import { logDOM } from "@testing-library/react";
import logo from "../../logo.svg";

function IntroAnimation({ setSplashDone }) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [textFinished, setTextFinished] = useState(false);
  const [text2Finished, setText2Finished] = useState(false);
  const [text3Finished, setText3Finished] = useState(false);
  const [fullText, setFullText] = useState("Hello");
  const [fullText2, setFullText2] = useState("My name is Santi");
  const [fullText3, setFullText3] = useState("Welcome to my website");
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);
  const [textDisappear, setTextDisappear] = useState(false)

  const ref = useRef()

  useEffect(() => {

    if(currentText == 0){
      setTimeout(() => {
        setCurrentText(1)
      }, 1200);
    }

    if (index < fullText.length && !textFinished && currentText == 1) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }

    if (index == fullText.length ) {
      setTimeout(() => {
        setTextFinished(true);
      }, 800);
    }

    if (index >= 0 && textFinished ) {
      setTimeout(() => {
        console.log(text);
        setText(text.substring(0, index));
        setIndex(index - 1);
      }, 50);
    }

    if (textFinished && text.length == 0 && currentText == 1 ) {
      console.log("we here");
      setTimeout(() => {
        setCurrentText(2);
      }, 500);
    }

    if (
      index2 < fullText2.length &&
      textFinished &&
      !text2Finished &&
      text.length == 0 &&
      currentText == 2
      
    ) {
      setTimeout(() => {
        setText2(text2 + fullText2[index2]);
        setIndex2(index2 + 1);
        console.log(text2);
      }, 40);
    }

    if (index2 == fullText2.length ) {
      setTimeout(() => {
        setText2Finished(true);
      }, 800);
    }

    if (index2 >= 0 && text2Finished && textFinished ) {
      setTimeout(() => {
        console.log(text);
        setText2(text2.substring(0, index2));
        setIndex2(index2 - 1);
      }, 40);
    }

    if (
      textFinished &&
      text.length == 0 &&
      text2Finished &&
      text2.length == 0 &&
      currentText == 2
      
    ) {
      console.log("we here");
      setTimeout(() => {
        setCurrentText(3);
      }, 500);
    }

    if (
      index3 < fullText3.length &&
      text2Finished &&
      !text3Finished &&
      text2.length == 0 &&
      currentText == 3
      
    ) {
      setTimeout(() => {
        setText3(text3 + fullText3[index3]);
        setIndex3(index3 + 1);
        console.log(text3);
      }, 35);
    }

    if (index3 == fullText3.length ) {
      setTimeout(() => {
        setText3Finished(true);
      }, 800);
    }

    if (
      text2Finished &&
      text3Finished &&
      text2.length == 0 &&
      currentText == 3
      
    ) {
      

      setTimeout(() => {
        setTextDisappear(true)
      }, 100)

      setTimeout(() => {
        setAnimationDone(true);
      }, 400);
    }
  }, [
    index,
    textFinished,
    text2Finished,
    index2,
    text3Finished,
    index3,
    currentText,
  ]);


  useEffect(() => {
    if(animationDone){
      setTimeout(() => {
        setSplashDone(true)
      }, 820)
    }
  }, [animationDone])

  return (
    <div className={!animationDone ? "introTextDivContainer" : "introTextDivContainerSlideUp"} ref={ref} >
    <div className={!animationDone ? `${classes.introTextDiv}` : "introTextSlideUp"}>
      <Typography variant="h1" className={!textDisappear ? `${classes.introText}` : "introTextFade"}>

        {!animationDone  ? currentText == 1 ? text : currentText == 2 ? text2 : text3 : <></>}
        {!animationDone  ? <span className="blinkerEffect">|</span> : <></>}
      </Typography>
    </div>
    </div>
  );
}

export default IntroAnimation;
