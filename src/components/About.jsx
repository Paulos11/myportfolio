import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Code, Brush, Layers } from '@mui/icons-material';
import { motion } from 'framer-motion';

const GlassBox = styled(Paper)(({ theme }) => ({
  backdropFilter: 'blur(20px)',
  background: 'transparent',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.2)',
  },
  height: '100%',
}));

const SkillIcon = styled(Box)(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  marginRight: theme.spacing(1),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
  color: 'white',
  marginBottom: theme.spacing(1),
  fontWeight: 'bold',
}));

const CompactText = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  lineHeight: 1.4,
}));

const AboutSection = () => {
  const theme = useTheme();

  const skills = [
    { name: 'Full Stack Development', icon: <Code fontSize="small" /> },
    { name: 'UI/UX Design', icon: <Brush fontSize="small" /> },
    { name: 'Graphic Design', icon: <Layers fontSize="small" /> },
  ];

  return (
    <Box
      component={motion.section}
      id="about"
      sx={{ py: 4 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <GlassBox>
              <SectionTitle variant="h5" mb={1} className='text-[#9A9A9A]' >
                About Me
              </SectionTitle>
              <CompactText color="#9A9A9A" paragraph>
                I am a passionate full-stack developer with a strong foundation in computer application and design. I strive to create seamless and engaging user experiences, bridging the gap between complex functionalities and intuitive interfaces. My goal is to bridge the gap between complex functionalities and intuitive interfaces, making technology accessible and enjoyable for everyone.
              </CompactText>
            </GlassBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <GlassBox>
              <SectionTitle variant="h6" mb={1}>
                Key Skills
              </SectionTitle>
              {skills.map((skill, index) => (
                <Box key={index} display="flex" alignItems="center" mb={1}>
                  <SkillIcon>
                    {React.cloneElement(skill.icon, { style: { color: '#9A9A9A' } })}
                  </SkillIcon>
                  <CompactText color="#9A9A9A">
                    {skill.name}
                  </CompactText>
                </Box>
              ))}
            </GlassBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;