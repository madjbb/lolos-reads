import React, { useContext }  from 'react';
import Typography from '@mui/material/Typography';
import BooksList from '../components/BooksList';

import { BooksContext } from '../components/contexts/books.context';

function List() {
  const {books} = useContext(BooksContext);
  // console.log('books', books);
  return (
    <>
      <Typography variant='h4' component="h3">
        Book Reviews
      </Typography>
      <BooksList books={books} />
    </>
  )
}

export default List