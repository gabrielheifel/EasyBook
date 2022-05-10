import React from 'react'
import { 
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material';

const Edit4Inputs = (props) => {

  const { description, textfield1, textfield2, textfield3, textfield4 } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{width: 700, height: 400, p: 15, pt: 6, pb: 6 }}
    >
      <Typography 
        variant="h4" 
        component="h2"
        sx={{m: 2}}
      >
        {description}
      </Typography>

      <TextField 
        label={textfield1}
        variant="outlined"
        size='small'
        sx={{mb: 1}}
      />
      <TextField 
        label={textfield2} 
        variant="outlined"
        size='small'
        sx={{mb: 1}}
      />
      <TextField 
        label={textfield3} 
        variant="outlined"
        size='small'
        sx={{mb: 1}}
      />
      <TextField 
        label={textfield4}
        variant="outlined"
        size='small'
        sx={{mb: 3}}
      />
      <Button 
        variant='contained'
        color="secundary" 
        size="small"
        sx={{mb: 1}}
        style={{color: 'white'}}
      >
        Salvar
      </Button>
    </Box>
  )
}

export default Edit4Inputs;