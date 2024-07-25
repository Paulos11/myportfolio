import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Container, 
  Avatar, 
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import profileImage from '../assets/me-new.png';
import CV from '../assets/my_cv_sunil.pdf';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
}));

const GlassBox = styled(Box)(({ theme }) => ({
  backdropFilter: 'blur(20px)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.2)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '4px',
  padding: '8px 20px',
  fontWeight: 'bold',
  textTransform: 'none',
  fontFamily: "'Fira Code', monospace",
  transition: 'all 0.3s ease-in-out',
  color: 'white',
  borderColor: 'rgba(255, 255, 255, 0.5)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.25)',
    borderColor: 'white',
  },
}));

const AnimatedAvatar = styled(motion(Avatar))(({ theme }) => ({
  width: 150,
  height: 150,
  border: '4px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  filter: 'grayscale(100%) brightness(1.1) contrast(1.1)',
  '&:hover': {
    border: '4px solid rgba(255, 255, 255, 0.5)',
    transform: 'scale(1.05) rotate(5deg)',
    boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.2)',
    filter: 'grayscale(40%) brightness(1.1) contrast(1.1) saturate(1.2)',
  },
}));
const CodeLine = styled(Box)(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: theme.spacing(1),
  fontSize: '0.9rem',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#9A9A9A',
  margin: theme.spacing(0, 1),
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Header = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const img = new Image();
    img.src = profileImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <NavButton onClick={() => scrollToSection('about')}>About</NavButton>
          <NavButton onClick={() => scrollToSection('skills')}>Skills</NavButton>
          <NavButton onClick={() => scrollToSection('projects')}>Projects</NavButton>
          <NavButton onClick={() => scrollToSection('contacts')}>Contact</NavButton>
        </Toolbar>
      </StyledAppBar>
      <Box 
        id="home" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          py: 8,
          mt: 8,
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: theme.spacing(4) }}
          >
            {imageLoaded && (
              <AnimatedAvatar
                src={profileImage}
                alt="Paul Lakandri"
                whileHover={{ scale: 1.05, rotate: 5 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassBox>
              <CodeLine>const developer = {`{`}</CodeLine>
              <CodeLine sx={{ ml: 2 }}>name: <span style={{ color: '#4CAF50' }}>"Paul Lakandri"</span>,</CodeLine>
              <CodeLine sx={{ ml: 2 }}>title: <span style={{ color: '#2196F3' }}>
                <Typewriter
                  options={{
                    strings: ['"Software Developer Undergraduate"', '"Full Stack Developer"', '"Graphic Designer"'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 25,
                    wrapperClassName: 'typewriter-wrapper',
                  }}
                />
              </span>,
              </CodeLine>
              <CodeLine sx={{ ml: 2 }}>passion: <span style={{ color: '#FFC107' }}>"Creating innovative solutions"</span>,</CodeLine>
              <CodeLine>{`}`};</CodeLine>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <StyledButton 
                  variant="contained" 
                  href={CV} 
                  download 
                  size="small"
                  sx={{ mr: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}
                >
                  Download CV
                </StyledButton>
                <StyledButton 
                  variant="outlined" 
                  onClick={() => scrollToSection('contacts')}
                  size="small"
                >
                  Contact Me
                </StyledButton>
              </Box>
            </GlassBox>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}

export default Header;
