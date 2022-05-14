import React from 'react'
import { 
  Box,
  Typography,
  TextField,
  Container,
  Button
} from '@mui/material';
import NavBar from '../../Components/NavBar/NavBar';
import Categories from '../../Components/Categories/Categories';

const Edit4Inputs = (props) => {
  const { isPassword, description, textfield1, textfield2 } = props;

  return (
    <>
      <NavBar color='primary' isUser={true} />
      <Categories color='secundary' />
      <Container maxWidth="xl">
        <Box 
          display="flex"
          justifyContent="center"
          sx={{ bgcolor: 'white', p: 4 }} 
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{width: 700, height: 400, p: 15, pt: 1, pb: 6 }}
          >
            <Typography 
              variant="h4" 
              component="h2"
              sx={{m: 2, mb: 4}}
            >
              {description}
            </Typography>

            {isPassword 
              ? <TextField 
                  type='password'
                  label={textfield1}
                  variant="outlined"
                  size='small'
                  sx={{mb: 1}}
                /> 
              : <TextField 
                  label={textfield1}
                  variant="outlined"
                  size='small'
                  sx={{mb: 1}}
                />
            }
            {isPassword 
              ? <TextField 
                  type='password'
                  label={textfield2}
                  variant="outlined"
                  size='small'
                  sx={{mb: 3}}
                /> 
              : <TextField 
                  label={textfield2}
                  variant="outlined"
                  size='small'
                  sx={{mb: 3}}
                />
            }
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
        </Box>
      </Container>
    </>
  )
}

export default Edit4Inputs;