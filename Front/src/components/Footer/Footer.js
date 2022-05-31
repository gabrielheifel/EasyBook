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
        sx={{ 
          // position: {position},
          position: 'absolute',
          bottom: 0,
          flex:1,
          mt: 4, 
          width: '100%', 
          height:'100px', 
          bgcolor: '#343A40',
        }}
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