import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{ paddingTop: '1em', paddingBottom: '1em', marginBottom: '2em' }}
      >
        <Toolbar sx={{gap: '1em'}} >
          <Typography
            variant="h5"
            component={NavLink}
            to="/"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          >
            Lolo's Reads
          </Typography>
          <Typography
            variant="button"
            component={NavLink}
            to="/add"
            sx={{ textDecoration: 'none', color: 'inherit', display: {xs: 'none', sm: 'block'} }}
          >
            New Review
          </Typography>
          <Fab color="secondary" aria-label="add" component={NavLink} to="/add">
            <AddIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
