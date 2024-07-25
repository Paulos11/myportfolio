import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import tufuImage from '../assets/tufu.png';
import pptImage from '../assets/ppt.png';
import jobImage from '../assets/job.png';
import acaImage from '../assets/aca.png';
import chImage from '../assets/ch.png';
import fmImage from '../assets/fm.png';

const GlassBox = styled(Paper)(({ theme }) => ({
  background: 'transparent',
  backdropFilter: 'blur(20px)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.2)',
  },
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const ProjectImage = styled('div')({
  width: '100%',
  height: '120px',
  borderRadius: '4px',
  marginBottom: '8px',
  overflow: 'hidden',
  position: 'relative',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
  color: 'white',
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
  fontSize: '1.2rem',
}));

const CompactText = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  lineHeight: 1.3,
}));

const CustomSlider = styled(Slider)({
  position: 'relative',
  '& .slick-list': {
    margin: '0 -8px',
  },
  '& .slick-slide > div': {
    padding: '0 8px',
  },
  '& .slick-prev, & .slick-next': {
    color: 'white',
    zIndex: 1,
    '&:hover': {
      color: 'primary.main',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .slick-prev': {
    left: -30,
  },
  '& .slick-next': {
    right: -30,
  },
});

const ScrollingImage = styled('img')({
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  animation: 'scrollImage 20s linear infinite',
  '@keyframes scrollImage': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-50%)' },
  },
});

const ProjectCard = ({ title, description, image, onViewProject }) => (
  <GlassBox>
    <ProjectImage>
      <ScrollingImage src={image} alt={title} />
    </ProjectImage>
    <CompactText variant="subtitle1" fontWeight="bold" color="#9A9A9A" gutterBottom>
      {title}
    </CompactText>
    <CompactText color="#9A9A9A" sx={{ flexGrow: 1, mb: 1 }}>
      {description}
    </CompactText>
    <Button
      variant="outlined"
      color="primary"
      onClick={onViewProject}
      size="small"
      sx={{ fontSize: '0.7rem', padding: '2px 8px' }}
    >
      View Project
    </Button>
  </GlassBox>
);

const ProjectModal = ({ project, open, handleClose }) => (
  <Modal
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{ timeout: 500 }}
  >
    <Fade in={open}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          {project.title}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {project.description}
        </Typography>
        <img src={project.image} alt={project.title} style={{ width: '100%', marginTop: '16px' }} />
      </Box>
    </Fade>
  </Modal>
);

const CustomArrowComponent = ({ currentSlide, slideCount, ...props }) => {
  // Custom arrow component to handle currentSlide and slideCount props
  return props.direction === 'prev' ? (
    <ArrowBackIosIcon {...props} />
  ) : (
    <ArrowForwardIosIcon {...props} />
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack solution with user authentication, product management, and secure payment integration.",
      image: tufuImage, 
      link: "#"
    },
    {
      title: "PPT Management System",
      description: "Streamlined web app for organizing, sharing, and downloading presentation materials with advanced search capabilities.",
      image: pptImage, 
      link: "#"
    },
    {
      title: "Job Portal",
      description: "Comprehensive platform connecting job seekers and employers, featuring vacancy listings, application tracking, and hiring tools.",
      image: jobImage, 
      link: "#"
    },
    {
      title: "Academic Consultancy",
      description: "Interactive website for educational consulting, offering resources, appointment scheduling, and personalized advice for students.",
      image: acaImage, 
      link: "#"
    },
    {
      title: "Church Management System",
      description: "All-in-one solution for religious organizations to manage members, events, donations, and communications efficiently.",
      image: chImage, 
      link: "#"
    },
    {
      title: "File Sharing System",
      description: "Secure and user-friendly platform for uploading, organizing, and sharing files with customizable access controls.",
      image: fmImage, 
      link: "#"
    },
  ];

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    prevArrow: <CustomArrowComponent direction="prev" />,
    nextArrow: <CustomArrowComponent direction="next" />,
  };

  return (
    <Box
      component={motion.section}
      id="projects"
      sx={{ py: 3, position: 'relative' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
        <SectionTitle variant="h5" textAlign="center" mb={3}>
          My Projects
        </SectionTitle>
        <CustomSlider {...sliderSettings}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onViewProject={() => handleOpen(project)}
            />
          ))}
        </CustomSlider>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            open={open}
            handleClose={handleClose}
          />
        )}
      </Container>
    </Box>
  );
};

export default Projects;
