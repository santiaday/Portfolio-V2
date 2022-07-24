import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./experiencePageStyles.css";
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import data from "./experience.json"
import PositionComponent from "./PositionComponent/PositionComponent"

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log(data)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function ExperiencePage({}) {
  
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <div
      className="experiencePageContainer"
      style={{
        position: "aboslute",
        zIndex: 95,
      }}
    >
      <div className="experienceHeaderContainer">
        <Typography
          variant="h1"
          style={{ fontWeight: "700", backgroundColor: "transparent" }}
        >
          Experience
        </Typography>
      </div>

<div className="experienceTabsContainer">
<div className="experienceTabsShell">
<Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "60vh" , width: "50%" }}
    >
      <Tabs
        orientation="vertical"
        centered
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Expedia Group" {...a11yProps(0)} />
        <Tab label="FIU SCIS" {...a11yProps(1)} />
        <Tab label="DoorLoop" {...a11yProps(2)} />
        <Tab label="FIU ECE" {...a11yProps(3)} />
        <Tab label="Town Of Cutler Bay" {...a11yProps(4)} />
      </Tabs>
        <TabPanel value={value} index={0}>
        <PositionComponent position={data[0]}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <PositionComponent position={data[1]}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <PositionComponent position={data[2]}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <PositionComponent position={data[3]}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <PositionComponent position={data[4]}/>
      </TabPanel>
    </Box>
    </div>
    </div>
    </div>
  );
}

export default ExperiencePage;
