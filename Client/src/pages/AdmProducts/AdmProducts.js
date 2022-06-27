import React, { forwardRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { 
  Box,
  TextField,
  Container,  
  Button,
  Stack,
  Snackbar
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import { api } from '../../services/api';

const AdmProducts = (props) => {
  // const navigate = useNavigate();
  const [values, setValues] = useState();
  const [open, setOpen] = useState(false);
  const [severity, setSevetiry] = useState();
  const [message, setMessage] = useState();

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleChangeValues = value => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleCreateProduct = () => {
    try {
      api.post("addproduct", {
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
      setOpen(true);
      setSevetiry("success");
      setMessage("Dados envidados!");
    } catch (e) {
      setOpen(true);
      setSevetiry("error");
      setMessage("Error!");
    }
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
                // onClick={() => handleDeleteProduct()}
              >
                Excluir
              </Button>
              <Button 
                variant='contained'
                color="secundary"
                size="small"
                sx={{mb: 1, width: '20%'}}
                style={{color: 'white'}}
                // onClick={() => handleEditProduct()}
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

      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>

      <Footer />
    </>
  )
}

export default AdmProducts;