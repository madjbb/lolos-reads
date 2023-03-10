// third party libraries
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//Pages
import List from './pages/List';
import Add from './pages/Add';
import Update from './pages/Update';
import View from './pages/View';
import NotFound from './pages/NotFound';

//Components
import Layout from './components/Layout';
import { BooksProvider } from './components/contexts/books.context';
import { SnackbarProvider } from './components/contexts/snackbar.context';
import theme from './theme/theme';

function App() {
  return (
    <Router>
    <CssBaseline />
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <BooksProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<List />} />
                <Route path="add" element={<Add />} />
                <Route path="update/:id" element={<Update />} />
                <Route path="view/:id" element={<View />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BooksProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
