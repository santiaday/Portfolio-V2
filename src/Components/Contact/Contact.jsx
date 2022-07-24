import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./contactStyles.css";

function Contact({}) {

  return (
    <div
    className="contactPageContainer"
    style={{
      position: "aboslute",
      zIndex: 95,
    }}
  >
    <div className="contactHeaderContainer">
      <Typography
        variant="h1"
        style={{ fontWeight: "700", backgroundColor: "transparent" }}
      >
        Contact Me
      </Typography>
    </div>
    </div>
  );
}

export default Contact;
