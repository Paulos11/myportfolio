import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './components/MainLayout';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ffffff' },
    background: { default: '#272624', paper: '#3a3936' },
  },
  typography: { fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif" },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": { backgroundColor: "#2b2b2b" },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#6b6b6b",
            minHeight: 24,
            border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": { backgroundColor: "#959595" },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255, 255, 255, 0.5)',
          '&:hover': { borderColor: '#ffffff' },
        },
      },
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </MainLayout>
    </Router>
  </ThemeProvider>
);

export default App;
