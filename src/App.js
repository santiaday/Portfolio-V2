import './App.css';
import IntroAnimation from './Components/IntroAnimation/IntroAnimation';
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Raleway", "sans-serif"
    ].join(",")
  }
});

function App() {

  const [splashDone , setSplashDone] = useState(false);




  return (
    <ThemeProvider theme={theme}>
      {!splashDone ? <IntroAnimation setSplashDone={setSplashDone} style={{zIndex: "100"}}/> : <></>}
      
      <Navbar style={{position: "fixed"}}/>
      <LandingPage />
    </ThemeProvider>
    
  );
}

export default App;
