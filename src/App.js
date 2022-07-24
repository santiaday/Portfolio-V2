import "./App.css";
import "./App.scss"
import IntroAnimation from "./Components/IntroAnimation/IntroAnimation";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import AboutMePage from "./Components/AboutMePage/AboutMePage"
import ExperiencePage from "./Components/ExperiencePage/ExperiencePage"
import Contact from "./Components/Contact/Contact";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Projects from "./Components/Projects/Projects"

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});



function App() {

  const [splashDone, setSplashDone] = useState(false);

  return (
    <ThemeProvider theme={theme}>
        {/* {!splashDone ? (
          <IntroAnimation
            setSplashDone={setSplashDone}
            style={{ zIndex: "100" }}
          />
        ) : (
          <></>
        )} */}

        <Navbar style={{ position: "fixed" }} />
            <LandingPage />

            <AboutMePage />
            <ExperiencePage />
            <Projects />
            <Contact />

    </ThemeProvider>

  );
}

export default App;
