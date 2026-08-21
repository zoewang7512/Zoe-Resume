import { useState } from "react";
//sections
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//mui
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { animateScroll as scroll } from "react-scroll";

function App(props) {
  const [mode, setMode] = useState("light");

  //button to the top
  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const scrollToTop = () => {
      scroll.scrollToTop();
    };

    return (
      <Fade in={trigger}>
        <Box
          onClick={scrollToTop}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }

  //custom theme
  const darkTheme = createTheme({
    typography: {
      fontFamily: ["Roboto", "Noto Sans TC", "sans-serif"].join(","),
    },
    palette: {
      mode: mode,
      primary: {
        main: "#10d2ff",
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#10d2ff",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#10d2ff",
            },
          },
        },
      },
    },

    overrides: {
      MuiAppBar: {
        color: "transparent",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Navbar mode={mode} setMode={setMode} />
        <Toolbar id="back-to-top-anchor" />
        <Container maxWidth={false}>
          <Home />
          <About mode={mode} />
          <Projects />
          <Contact />
          <Footer />

          <ScrollTop {...props}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
