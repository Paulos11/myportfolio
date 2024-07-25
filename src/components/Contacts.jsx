import React, { useRef,useState  } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Link,CircularProgress ,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

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
  display: 'flex',
  flexDirection: 'column',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
  color: 'white',
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
}));

const CompactText = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  lineHeight: 1.4,
}));

const ContactOption = ({ icon, title, value, href }) => (
  <Box display="flex" alignItems="center" mb={1}>
    <Box sx={{ mr: 1, color: '#9A9A9A' }}>{icon}</Box>
    <Link href={href} target="_blank" rel="noopener noreferrer" color="inherit">
      <CompactText color="#9A9A9A">{value}</CompactText>
    </Link>
  </Box>
);
const Contacts = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm('service_ebu3n3n', 'template_sg2v4gk', form.current, 'g0FaxBbhS0oqgItbN')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        setIsSent(true);
        setIsLoading(false);
        e.target.reset();
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Error: ' + error.text);
        setIsLoading(false);
      });
  };
  return (
    <Box 
      component={motion.section}
      id="contacts"
      sx={{ py: 4 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
        <SectionTitle variant="h5" textAlign="center" mb={2}>
          Contact Me
        </SectionTitle>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GlassBox>
              <CompactText color="#9A9A9A" mb={2}>
                Let's work together on your project, collaborate within companies, or explore any technology. I'm excited to bring your ideas to life!
              </CompactText>
              <ContactOption 
                icon={<Email />}
                value="paul.lakandri50@gmail.com"
                href="mailto:paul.lakandri50@gmail.com"
              />
              <ContactOption 
                icon={<LinkedIn />}
                value="LinkedIn Profile"
                href="https://www.linkedin.com/in/sunil-lakandri-1543a7193/"
              />
              <ContactOption 
                icon={<GitHub />}
                value="GitHub Profile"
                href="https://github.com/Paulos11"
              />
            </GlassBox>
          </Grid>
          <Grid item xs={12} md={8}>
            <GlassBox component="form" ref={form} onSubmit={handleSubmit}>
              {isSent ? (
                <Box textAlign="center" py={4}>
                  <Typography variant="h6" color="#9A9A9A" gutterBottom>
                    Thank you for your message!
                  </Typography>
                  <Typography color="#9A9A9A">
                    I'll get back to you as soon as possible.
                  </Typography>
                </Box>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      margin="dense"
                      name="name"
                      label="Your Name"
                      required
                      variant="outlined"
                      InputLabelProps={{ style: { color: '#9A9A9A' } }}
                      InputProps={{ style: { color: '#9A9A9A' } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      margin="dense"
                      name="email"
                      label="Your Email"
                      type="email"
                      required
                      variant="outlined"
                      InputLabelProps={{ style: { color: '#9A9A9A' } }}
                      InputProps={{ style: { color: '#9A9A9A' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      margin="dense"
                      name="message"
                      label="Your Message"
                      multiline
                      rows={3}
                      required
                      variant="outlined"
                      InputLabelProps={{ style: { color: '#9A9A9A' } }}
                      InputProps={{ style: { color: '#9A9A9A' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </Grid>
                </Grid>
              )}
            </GlassBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacts;