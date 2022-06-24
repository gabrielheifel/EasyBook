import React from 'react';
import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchAppBar = ({setSearchInput}) => {

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
  }  

  return (
    <>
      <Box sx={{width:'350px'}}>
        <InputBase
          sx={{ pl:1,backgroundColor:'#fff', borderRadius: '5px 0 0 5px', width:'80%' }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => searchItems(e.target.value)}
        />
        <IconButton 
          type="submit" 
          sx={{ 
            p:"4px",
            backgroundColor:'#fff', 
            borderRadius: '0 5px 5px 0',
            "&hover": {
              backgroundColor:'#edededb5'              
            } 
          }} 
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </>        
  );
}

export default SearchAppBar;