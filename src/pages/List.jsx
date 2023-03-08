import React from 'react';
import Typography from '@mui/material/Typography';
import BooksList from '../components/BooksList';

function List() {
  return (
    <>
      <Typography variant='h4' component="h3">
        Book Reviews
      </Typography>
      <BooksList />
    </>
  )
}

export default List