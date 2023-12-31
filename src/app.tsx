import { Home } from "./components/Home";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./components/Overview/Overview";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { Container, GlobalStyle } from "./globalStyle";
import Router from "preact-router";
import Footer from "./components/Footer/Footer";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Router>
          <Home path="/" />
          <Overview path="/overview" />
          <Skills path="/skills" />
          <Projects path="/projects" />
          <Contact path="/contact" />
        </Router>
        <Footer />
      </Container>
    </>
  );
}
