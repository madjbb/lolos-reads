import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import BookForm from '../components/forms/BookForm';
import { BooksContext } from '../components/contexts/books.context';

function Update() {
  const { books, updateBook } = useContext(BooksContext);
  const { id } = useParams();
  const book = books.find((book) => book._id === id);
  console.log(book);
  const navigate = useNavigate();
  const submitHandler = (id, vals) => {
    updateBook(id, vals);
    navigate('/');
  };

  return (
    <>
      <Typography variant="h4" component="h3" sx={{ marginBottom: '0.5em' }}>
        Update Review
      </Typography>
      <BookForm book={book} submitHandler={submitHandler} />
    </>
  );
}

export default Update;
