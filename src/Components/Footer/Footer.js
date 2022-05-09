import React from 'react'
import {
  Box, 
  Typography
} from '@mui/material';


const Footer = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mn={0}
        sx={{ mt: 3.4, width: '100%', height: 80, bgcolor: '#343A40'}} 
      >
        <Typography
          variant="h4" 
          component="h2"
          sx={{m: 1}}
          style={{color: 'white'}}
        >
          Footer
        </Typography>
      </Box>
    </>
  )
}

export default Footer;