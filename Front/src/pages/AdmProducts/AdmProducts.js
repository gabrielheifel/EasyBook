import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box,
  Typography,
  TextField,
  Container,  
  Button
} from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';

const AdmProducts = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar color='primary' isUser={true} />
      <Categories color='secundary' />
      <Container maxWidth="xl">
        <Box 
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{ bgcolor: 'white', p: 4 }} 
        >
            <TextField 
              label="Título"
              variant="outlined"
              size='small'
              sx={{mb: 1}}
            />
            <TextField 
              label="Sinopse" 
              variant="outlined"
              size='small'
              multiline
              rows={4}
              sx={{mb: 1}}
            />
            <TextField 
              label="Autor" 
              variant="outlined"
              size='small'
              sx={{mb: 1, width: '50%'}}
            />
            <Box 
              display= 'flex'
              justifyContent="space-between"
            >
              <TextField 
                label="Editora"
                variant="outlined"
                size='small'
                sx={{mb: 2, width: '50%'}}
              />
              <input
                accept="image/*"
                // className={classes.input}
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button variant="contained" component="span" >
                  Carregar Imagem
                </Button>
              </label> 
            </Box>
            <Box 
              display='flex' 
              justifyContent='space-between'
              sx={{mb: 3}}
            >
              <TextField type="number" label="Preço em R$" size='small'/>
              <TextField type="number" label="Quantidade" size='small'/>
              <TextField 
                label="Categoria"
                variant="outlined"
                size='small'
              />
            </Box>

            {props.typebtn==='edit' &&
              <Box 
                display= 'flex'
                justifyContent="space-evenly"
              >
                <Button 
                  variant='contained'
                  color="red" 
                  size="small"
                  sx={{mb: 1, width: '20%'}}
                  style={{color: 'white'}}
                  // onClick={() => navigate(`${navig}`)}
                >
                  Excluir
                </Button>
                <Button 
                  variant='contained'
                  color="secundary"
                  size="small"
                  sx={{mb: 1, width: '20%'}}
                  style={{color: 'white'}}
                  // onClick={() => navigate(`${navig}`)}
                >
                  Salvar
                </Button>

              </Box>
            }
            {props.typebtn==='create' &&
              <Box 
                display= 'flex'
                justifyContent="space-evenly"
              >
                <Button 
                  variant='contained'
                  color="secundary" 
                  size="small"
                  sx={{mb: 1, width: '20%'}}
                  style={{color: 'white'}}
                  // onClick={() => navigate(`${navig}`)}
                >
                  Adicionar Produto
                </Button>
              </Box>
            }
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default AdmProducts;