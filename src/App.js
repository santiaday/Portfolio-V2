import "./App.css";
import "./App.scss"
import IntroAnimation from "./Components/IntroAnimation/IntroAnimation";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import AboutMePage from "./Components/AboutMePage/AboutMePage"

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});



function App() {

  const [splashDone, setSplashDone] = useState(false);

  return (
    <ThemeProvider theme={theme}>
        {!splashDone ? (
          <IntroAnimation
            setSplashDone={setSplashDone}
            style={{ zIndex: "100" }}
          />
        ) : (
          <></>
        )}

        <Navbar style={{ position: "fixed" }} />
            <LandingPage />

            <AboutMePage />
    </ThemeProvider>

    // <section className="Parallax">
    //   <div
    //     className="Parallax__background"
    //     style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
    //   />
    //   <div
    //     className="Parallax__background-triangles"
    //     style={{ transform: `translateY(${offsetY * 0.8}px)` }}
    //   />
    //   <div className="Parallax__content">{renderContent()}</div>
    // </section>
  );
}

export default App;
