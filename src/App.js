import './App.css';
import IntroAnimation from './Components/IntroAnimation/IntroAnimation';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Raleway", "sans-serif"
    ].join(",")
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IntroAnimation>hi</IntroAnimation>
    </ThemeProvider>
    
  );
}

export default App;
