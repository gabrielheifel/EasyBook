import React, { useState } from 'react';
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
// import axios from 'axios';
import { api } from '../../services/api';

// const baseURL = 'http://localhost:3000';

const AdmProducts = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState();

  const handleChangeValues = value => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleCreateProduct = () => {
    api.post('addproduct', {
      titulo: values.titulo,
      sinopse: values.sinopse,
      autor: values.autor,
      editora: values.editora,
      preco: values.preco,
      estoque: values.estoque,
      categoria: values.categoria
    }).then((res) => {
      console.log(res)
    })

    // usar snackbar e navigate to /admin
  }

  return (
    <>
      <NavBar color='primary' />
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
            name="titulo"
            variant="outlined"
            size='small'
            sx={{mb: 1}}
            onChange={handleChangeValues}
          />
          <TextField 
            label="Sinopse" 
            name="sinopse"
            variant="outlined"
            size='small'
            multiline
            rows={4}
            sx={{mb: 1}}
            onChange={handleChangeValues}
          />
          <TextField 
            label="Autor" 
            name="autor"
            variant="outlined"
            size='small'
            sx={{mb: 1, width: '50%'}}
            onChange={handleChangeValues}
          />
          <Box 
            display= 'flex'
            justifyContent="space-between"
          >
            <TextField 
              label="Editora"
              name="editora"
              variant="outlined"
              size='small'
              sx={{mb: 2, width: '50%'}}
              onChange={handleChangeValues}
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
              <Button variant="contained" component="span">
                Carregar Imagem
              </Button>
            </label> 
          </Box>
          <Box 
            display='flex' 
            justifyContent='space-between'
            sx={{mb: 3}}
          >
            <TextField 
              type="number" 
              label="Preço em R$" 
              name="preco"
              size='small'
              onChange={handleChangeValues}
            />
            <TextField 
              type="number" 
              label="Quantidade" 
              name="estoque"
              size='small'
              onChange={handleChangeValues}
            />
            <TextField 
              label="Categoria"
              name="categoria"
              variant="outlined"
              size='small'
              onChange={handleChangeValues}
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
                onClick={() => handleCreateProduct()}
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