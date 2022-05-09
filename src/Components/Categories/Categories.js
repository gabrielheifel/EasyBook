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

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Categoria 1', 
          'Categoria 2', 
          'Categoria 3', 
          'Categoria 4',
          'Categoria 5'
        ].map((text, index) => (
          <ListItem button key={text}>
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