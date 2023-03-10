import Typography from '@mui/material/Typography';
import React, { useContext, useEffect } from 'react';
import BookForm from '../components/forms/BookForm';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { nanoid } from 'nanoid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link, useParams } from 'react-router-dom';

import { BooksContext } from '../components/contexts/books.context';

function View() {
  const { books, deleteBook } = useContext(BooksContext);

  const { id } = useParams();
  const book = books.find((book) => book._id === id);

  console.log('book', book);

  const formRowStyle = {
    marginBlockEnd: '2em',
  };

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'min-content auto max-content',
          gridTemplateRows: 'auto',
          gridTemplateAreas: `
          'img info icons'
          `,
          columnGap: '2em',
          marginBottom: '2em',
        }}
      >
        {/* <img
          src={book.avatarURL}
          alt="book cover image"
          style={{
            width: '6em',
            height: '100%',
            border: '0.5px solid grey',
            gridArea: 'img',
          }}
        /> */}
        <Avatar
          variant="square"
          src={book.avatarURL}
          sx={{
            width: '4.5em',
            height: '100%',
            border: '0.5px solid grey',
            gridArea: 'img',
          }}
        >
          {book.avatarURL ? null : <AutoStoriesIcon sx={{ height: '2.4em' }} />}
        </Avatar>
        <div style={{ gridArea: 'info' }}>
          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{ gridArea: 'title' }}
          >
            {book.title}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ gridArea: 'author' }}
          >
            {book.author}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={book.rating}
            precision={0.5}
            readOnly
            size="large"
            sx={{ gridArea: 'rating' }}
          />
        </div>
        <div style={{ gridArea: 'icons' }}>
          <IconButton
            size="large"
            to={`/update/${book._id}`}
            component={Link}
            sx={{ gridArea: 'edit' }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="large"
            sx={{ gridArea: 'delete' }}
            to={'/'}
            component={Link}
            onClick={() => deleteBook(id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div style={formRowStyle}>
        {book.feelings && (
          <TextField
            id="feelings"
            type="text"
            fullWidth
            label="How did this book make you feel?"
            defaultValue={book.feelings}
            InputProps={{ readOnly: true }}
            maxRows={10}
          />
        )}
      </div>
      <div style={formRowStyle}>
        {book.characters && (
          <TextField
            id="characters"
            type="text"
            fullWidth
            label="Who were your favourite characters?"
            defaultValue={book.characters}
            InputProps={{ readOnly: true }}
            maxRows={10}
          />
        )}
      </div>
      <div style={formRowStyle}>
        {book.writingStyle && (
          <TextField
            id="writingStyle"
            type="text"
            fullWidth
            label="What were your thoughts on the writing style?"
            defaultValue={book.writingStyle}
            InputProps={{ readOnly: true }}
            maxRows={10}
          />
        )}
      </div>
      <div style={formRowStyle}>
        {book.notLiked && (
          <TextField
            id="notLiked"
            type="text"
            fullWidth
            label="Was there anything you didn't like?"
            defaultValue={book.notLiked}
            InputProps={{ readOnly: true }}
            maxRows={10}
          />
        )}
      </div>
      <div style={formRowStyle}>
        {book.mostEnjoyed && (
          <TextField
            id="mostEnjoyed"
            type="text"
            fullWidth
            label="What did you most enjoy?"
            defaultValue={book.mostEnjoyed}
            InputProps={{ readOnly: true }}
            maxRows={10}
          />
        )}
      </div>
      <div style={formRowStyle}>
        {book.other && (
          <TextField
            id="other"
            type="text"
            fullWidth
            label="Any other comments?"
            defaultValue={book.other}
            InputProps={{ readOnly: true }}
            maxRows={10}
          />
        )}
      </div>
      {!book.feelings &&
        !book.characters &&
        !book.writingStyle &&
        !book.notLiked &&
        !book.mostEnjoyed &&
        !book.other && <p>Add more info to your review.</p>}
    </>
  );
}

export default View;
