import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./positionComponentStyles.css";

function PositionComponent({ position }) {

  return (
      <div className="positionComponentContainer">
        <Typography className="positionCompany">{position.position}</Typography>
        <Typography className="positionLocation" >{position.location}  <span style={{marginLeft: "5px", marginRight: "5px"}}>|</span>  {position.startDate} - {position.endDate}</Typography>
        <ul>
        {position.description.map((bullet) => {
            {console.log("hey")}
            return <li><Typography className="descriptionText">{bullet}</Typography></li>
        })}
        </ul>
      </div>
  );
}

export default PositionComponent;
