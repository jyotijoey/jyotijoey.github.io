import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
