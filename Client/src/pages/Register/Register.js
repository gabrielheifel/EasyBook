import React, { forwardRef, useState } from 'react'
import { 
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Stack,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import NavBar from '../../components/NavBar/NavBar';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import { api } from '../../services/api';


const Register = () => {
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
    console.log(values)
  }

  const handleCreateUser = () => {

    try {
      if(values.senha1 === values.senha2) {
        api.post("signup", {
          name: values.name,
          sobremone: values.sobrenome,
          cpf: values.cpf,
          nascimento: values.nascimento,
          sexo: values.sexo,
          email: values.email,
          senha: values.senha1
        }).then((res) => {
          console.log(res) 
        })
        setOpen(true);
        setSevetiry("success");
        setMessage("Dados envidados!");
      } else {
        setOpen(true);
        setSevetiry("error");
        setMessage("Senhas diferentes!");
      }
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
          justifyContent="center"
          sx={{p: 4}} 
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: 700, 
              height: 400, 
              p: 15, pt: 6, pb: 6,
              mt: 2
            }}
          >
            <Typography 
              variant="h4" 
              component="h2"
              sx={{m: 2}}
            >
              Registrar conta
            </Typography>

            <TextField 
              // id="outlined-basic"
              label="Nome" 
              name="name"
              variant="outlined"
              size='small'
              sx={{mb: 1}}
              onChange={handleChangeValues}
            />
            <TextField 
              // id="outlined-basic" 
              label="Sobrenome"
              name="sobrenome"
              variant="outlined"
              size='small'
              sx={{mb: 1}}
              onChange={handleChangeValues}
            />
            <TextField 
              // id="outlined-basic" 
              label="CPF"
              name="cpf"
              variant="outlined"
              size='small'
              sx={{mb: 1}}
              onChange={handleChangeValues}
            />
            <TextField 
              // id="outlined-basic" 
              label="Data de Nascimento"
              name="nascimento" 
              variant="outlined"
              size='small'
              sx={{mb: 1}}
              onChange={handleChangeValues}
            />
            <TextField 
              // id="outlined-basic" 
              label="Sexo" 
              name="sexo"
              variant="outlined"
              size='small'
              sx={{mb: 1}}
              onChange={handleChangeValues}
            />
            <TextField 
              // id="outlined-basic" 
              label="E-mail"
              name="email" 
              variant="outlined"
              size='small'
              sx={{mb: 1}}
              onChange={handleChangeValues}
            />
            <TextField 
              // id="outlined-basic" 
              label="Senha"
              name="password1"
              type='password' 
              variant="outlined"
              size='small'
              sx={{mb: 1}}
              onChange={handleChangeValues}
            />
            <TextField 
              // id="outlined-basic" 
              label="Insira senha novamente"
              name="password2" 
              type='password' 
              variant="outlined"
              size='small'
              sx={{mb: 3}}
              onChange={handleChangeValues}
            />
            <Button 
              variant='contained'
              color="secundary" 
              size="small"
              sx={{mb: 1}}
              style={{color: 'white'}}
              onClick={() => handleCreateUser()}
            >
              Registrar
            </Button>
          </Box>
        </Box>
      </Container>

      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
      <Footer/>
    </>
  )
}

export default Register