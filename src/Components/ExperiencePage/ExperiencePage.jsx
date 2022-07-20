import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import "./experiencePageStyles.css";
import { makeStyles } from "@material-ui/core/node_modules/@material-ui/styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import data from "./experience.json"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    }, []);
  
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <div
      className="experiencePageContainer"
      style={{
        position: "aboslute",
        transform: `translateY(-${offsetY}px)`,
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
      {/* <Timeline style={{marginTop: "60px"}} >
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
</Timeline> */}

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
        Expedia Group
      </TabPanel>
      <TabPanel value={value} index={1}>
        FIU SCIS
      </TabPanel>
      <TabPanel value={value} index={2}>
        DoorLoop
      </TabPanel>
      <TabPanel value={value} index={3}>
        FIU ECE
      </TabPanel>
      <TabPanel value={value} index={4}>
        Town Of Cutler Bay
      </TabPanel>
    </Box>
    </div>
    </div>
    </div>
  );
}

export default ExperiencePage;
