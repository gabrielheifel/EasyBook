import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div') ({
  position: 'relative',
  borderRadius: '5px',
  backgroundColor: 'white',
  marginLeft: 0,
  width: '40%',
  height: '30px'
});

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'primary',
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  width: '99%',
}));

export default function SearchAppBar() {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon color='primary'/>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </>        
  );
}
