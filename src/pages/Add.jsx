import { Typography } from '@mui/material'
import React from 'react'
import BookForm from '../components/forms/BookForm'

function Add() {
  return (
    <>
      <Typography variant='h4' component="h3" sx={{marginBottom: '0.5em'}}>
        Add Review
      </Typography>
      <BookForm />
    </>
  )
}

export default Add