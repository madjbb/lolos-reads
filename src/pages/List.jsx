import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import BooksList from '../components/BooksList';
// import { useNavigate } from 'react-router-dom';

import { BooksContext } from '../components/contexts/books.context';

function List() {
  const { books, deleteBook } = useContext(BooksContext);
  // const navigate = useNavigate();
  console.log('books', books);
  // const deleteHandler = () => {
  //   deleteBook();
  // };
  // if (books.length === 0) {return (<p>No reviews added.</p>)};
  return (
    <>
      <Typography variant="h4" component="h3">
        Book Reviews
      </Typography>
      {(books.length === 0) && (<p>Add a new review.</p>)}
      <BooksList books={books} deleteHandler={deleteBook} />
    </>
  );
}

export default List;
