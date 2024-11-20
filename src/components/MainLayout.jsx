import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import { AboutSection } from "./Portfolio";
import Experience from "./Experience";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from "./Footer";

const MovingLight = styled(Box)({
  position: "absolute",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
  filter: "blur(40px)",
  opacity: 0.5,
});

const MovingLightContainer = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: "hidden",
  zIndex: 0,
});

const ContentContainer = styled(Box)({
  position: "relative",
  zIndex: 1,
});

const MainLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #101010 0%, #101010 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CssBaseline />
      <MovingLightContainer>
        <MovingLight
          sx={{
            top: "10%",
            left: "20%",
            animation: "moveLight1 25s infinite",
            "@keyframes moveLight1": {
              "0%": { transform: "translate(0, 0)" },
              "25%": { transform: "translate(30vw, 15vh)" },
              "50%": { transform: "translate(10vw, 25vh)" },
              "75%": { transform: "translate(-20vw, 10vh)" },
              "100%": { transform: "translate(0, 0)" },
            },
          }}
        />
        <MovingLight
          sx={{
            top: "60%",
            right: "10%",
            animation: "moveLight2 30s infinite",
            "@keyframes moveLight2": {
              "0%": { transform: "translate(0, 0)" },
              "25%": { transform: "translate(-20vw, -15vh)" },
              "50%": { transform: "translate(-30vw, 5vh)" },
              "75%": { transform: "translate(10vw, -25vh)" },
              "100%": { transform: "translate(0, 0)" },
            },
          }}
        />
        <MovingLight
          sx={{
            bottom: "20%",
            left: "30%",
            animation: "moveLight3 35s infinite",
            "@keyframes moveLight3": {
              "0%": { transform: "translate(0, 0)" },
              "25%": { transform: "translate(25vw, 10vh)" },
              "50%": { transform: "translate(-15vw, 20vh)" },
              "75%": { transform: "translate(20vw, -15vh)" },
              "100%": { transform: "translate(0, 0)" },
            },
          }}
        />
        <MovingLight
          sx={{
            top: "30%",
            right: "25%",
            animation: "moveLight4 40s infinite",
            "@keyframes moveLight4": {
              "0%": { transform: "translate(0, 0)" },
              "33%": { transform: "translate(-15vw, 20vh)" },
              "66%": { transform: "translate(20vw, -10vh)" },
              "100%": { transform: "translate(0, 0)" },
            },
          }}
        />
        <MovingLight
          sx={{
            bottom: "40%",
            left: "10%",
            animation: "moveLight5 45s infinite",
            "@keyframes moveLight5": {
              "0%": { transform: "translate(0, 0)" },
              "20%": { transform: "translate(20vw, -15vh)" },
              "40%": { transform: "translate(30vw, 10vh)" },
              "60%": { transform: "translate(10vw, 25vh)" },
              "80%": { transform: "translate(-10vw, 5vh)" },
              "100%": { transform: "translate(0, 0)" },
            },
          }}
        />
        <MovingLight
          sx={{
            top: "5%",
            right: "40%",
            animation: "moveLight6 50s infinite",
            "@keyframes moveLight6": {
              "0%": { transform: "translate(0, 0)" },
              "30%": { transform: "translate(-25vw, 15vh)" },
              "60%": { transform: "translate(15vw, 25vh)" },
              "100%": { transform: "translate(0, 0)" },
            },
          }}
        />
      </MovingLightContainer>
      <ContentContainer>
        <Header />
        <AboutSection />
        <Experience />
        <Projects />
        <Contacts />
      </ContentContainer>
    </Box>
  );
};

export default MainLayout;
