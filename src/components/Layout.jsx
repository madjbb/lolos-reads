import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/system/Container';

import Header from './Header';

function Layout() {
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
      <footer style={{height: '5em'}} ></footer>
    </>
  );
}

export default Layout;
