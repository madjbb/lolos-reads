import React, { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/system/Container';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// import Button from '@mui/material/Button';

import Header from './Header';
import { SnackbarContext } from './contexts/snackbar.context';

function Layout() {
  const { open, autoHideDuration, closeSnackbar, severity, message } =
    useContext(SnackbarContext);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </main>
      <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <footer style={{ height: '8em' }}></footer>
    </>
  );
}

export default Layout;
