import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton,
  Link
} from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        bgcolor: 'rgba(255, 255, 255, 0.05)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: 'center'
          }}
        >
          <Typography variant="body2" color="white" sx={{ mb: { xs: 2, md: 0 } }}>
            &copy; 2024 Paul Lakandri. All rights reserved.
          </Typography>
          <Box>
            <IconButton 
              component={Link} 
              href="https://linkedin.com/in/paullakandri" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ color: 'white', '&:hover': { color: '#0077B5' } }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton 
              component={Link} 
              href="https://github.com/paullakandri" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ color: 'white', '&:hover': { color: '#6e5494' } }}
            >
              <GitHub />
            </IconButton>
            <IconButton 
              component={Link} 
              href="mailto:paul@example.com"
              sx={{ color: 'white', '&:hover': { color: '#D44638' } }}
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;