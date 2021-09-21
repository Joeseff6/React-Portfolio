import React, { Component } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Section from "./components/Section";
import Nav from "./components/Nav";
import AboutMeSection from "./components/AboutMeSection";
import TechnicalSkillsSection from "./components/TechnicalSkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import FadeComponent from "./components/FadeComponent";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <Container fluid>
        {/* <Nav /> */}
        <FadeComponent fadeTimer={500}>
          <Section fadeDirection="right">
            <AboutMeSection />
          </Section>
        </FadeComponent>
        <FadeComponent fadeTimer={1500}>
          <Section fadeDirection="left">
            <TechnicalSkillsSection />
          </Section>
        </FadeComponent>
        <FadeComponent fadeTimer={2750}>
          <Section fadeDirection="right">
            <ProjectsSection />
          </Section>
        </FadeComponent>
        <FadeComponent fadeTimer={3500}>
          <Footer />
        </FadeComponent>
      </Container>
    );
  }
}
