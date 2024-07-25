import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Code, Storage, Build, Brush, Videocam } from '@mui/icons-material';

const GlassBox = styled(Paper)(({ theme }) => ({
  background: 'transparent',
  backdropFilter: 'blur(20px)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.2)',
  },
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  margin: theme.spacing(0.3),
  fontSize: '0.7rem',
  height: '24px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
  color: 'white',
  marginBottom: theme.spacing(1),
  fontWeight: 'bold',
  fontSize: '1rem',
}));

const SkillCategory = ({ title, skills, icon }) => (
  <Box mb={1}>
    <Typography variant="body2" fontWeight="bold" color="#9A9A9A" sx={{ display: 'flex', alignItems: 'center', mb: 0.5, fontSize: '0.8rem' }}>
      {React.cloneElement(icon, { fontSize: 'small', sx: { color: '#9A9A9A', mr: 0.5 } })}
      {title}
    </Typography>
    <Box display="flex" flexWrap="wrap">
      {skills.map((skill, index) => (
        <StyledChip key={index} label={skill} size="small" />
      ))}
    </Box>
  </Box>
);

const Skills = () => {
  const skills = {
    frontend: ["React", "Next.js", "JS/TS", "HTML/CSS", "Redux"],
    backend: ["Node.js", "Express", "Python", "Django", "REST"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    devops: ["Git", "Docker", "AWS", "CI/CD"],
    uiux: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
    graphicDesign: ["Photoshop", "Illustrator", "InDesign"],
    videoEditing: ["Premiere", "After Effects", "DaVinci"]
  };

  return (
    <Box 
      component={motion.section}
      id="skills"
      sx={{ py: 3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
        <SectionTitle variant="h5" textAlign="center" mb={2}>
          Skills
        </SectionTitle>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <GlassBox>
              <SectionTitle variant="h6" mb={1}>
                Development Skills
              </SectionTitle>
              <SkillCategory title="Frontend" skills={skills.frontend} icon={<Code />} />
              <SkillCategory title="Backend" skills={skills.backend} icon={<Storage />} />
              <SkillCategory title="Database" skills={skills.database} icon={<Storage />} />
              <SkillCategory title="DevOps" skills={skills.devops} icon={<Build />} />
            </GlassBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <GlassBox>
              <SectionTitle variant="h6" mb={1}>
                Creative Skills
              </SectionTitle>
              <SkillCategory title="UI/UX Design" skills={skills.uiux} icon={<Brush />} />
              <SkillCategory title="Graphic Design" skills={skills.graphicDesign} icon={<Brush />} />
              <SkillCategory title="Video Editing" skills={skills.videoEditing} icon={<Videocam />} />
            </GlassBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;