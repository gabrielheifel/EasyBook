import React, { useState } from 'react'
import { 
  Box, 
  List,
  ListItem,
  ListItemText, 
  AppBar,
  Toolbar,
  Button,
  Drawer
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Categories = () => {  
  const [state, setState] = useState(false);
  const [selectCategorie, setSelectCategorie] = useState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleCategorie = textContent => {
    // setSelectCategorie(e.target.anchor);
    console.log(textContent)
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Administração', 
          'Artes e Fotografia', 
          'Autoajuda', 
          'Biografias',
          'História',
          'Psicologia',
          'Religião',
          'Terror e Suspense',
          'Mais Vendidos',
          'Lançamentos'
        ].map((text, index) => (
          <ListItem button key={index} >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  return (
    <>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='secundary'>
              <Toolbar style={{ minHeight: '35px'}}>
                <Button
                  startIcon={<MenuIcon />} 
                  size="small"
                  edge="start"
                  color="white"
                  aria-label="menu"
                  sx={{ p: 1 }}
                  onClick={toggleDrawer(anchor, true)}
                >
                  Categorias
                </Button>
              </Toolbar>
            </AppBar>
          </Box>      
          <Drawer
            onClick={handleCategorie}
            value={anchor}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  )
}

export default Categories