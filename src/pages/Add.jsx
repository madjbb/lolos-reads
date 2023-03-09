import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import BookForm from '../components/forms/BookForm';
import { useNavigate } from 'react-router-dom';

import { BooksContext } from '../components/contexts/books.context';

function Add() {
  const navigate = useNavigate();
  const {addBook} = useContext(BooksContext);
  console.log(addBook);
  const submitHandler = (data) => {
    addBook(data);
    navigate('/');
  };
  return (
    <>
      <Typography variant='h4' component="h3" sx={{marginBottom: '0.5em'}}>
        Add Review
      </Typography>
      <BookForm submitHandler={submitHandler} />
    </>
  )
}

export default Add