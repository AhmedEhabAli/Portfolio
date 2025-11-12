import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import DrawerAppBar from "./component/DrawerAppBar";
import Home from "./component/Home";
import About from "./component/About";
import Certificates from "./component/Certificates";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import ScrollToTop from "./component/ScrollToTop";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DrawerAppBar />
      <Home />
      <About />
      <Certificates />
      <Skills />
      <Project />
      <Contact />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
