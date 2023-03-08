import Typography from '@mui/material/Typography';
import React from 'react';
import BookForm from '../components/forms/BookForm';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

function View() {
  const book = {
    _id: nanoid(),
    title: 'Braiding Sweetgrass',
    author: 'Robin Wall Kimmerer',
    avatarURL: 'https://m.media-amazon.com/images/I/71OgjPcg6-L.jpg',
    feelings: 'Grateful',
    characters: 'The natural world',
    writingStyle: 'Calm, deep, insightful',
    notLiked: 'Her mentions of her ex',
    mostEnjoyed: 'How the book is dripping with gratitude for nature and life',
    other: 'Beautiful, uplifting and lifegiving read',
    rating: 4.5,
  };

  const formRowStyle = {
    marginBlockEnd: '2em',
  };

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'min-content auto min-content',
          gridTemplateRows: 'auto',
          gridTemplateAreas: `
          'img info icons'
          `,
          columnGap: '2em',
          marginBottom: '2em',
        }}
      >
        <img
          src={book.avatarURL}
          alt="book cover image"
          style={{
            width: '6em',
            height: '100%',
            border: '0.5px solid grey',
            gridArea: 'img',
          }}
        />
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
          <IconButton size="large" sx={{ gridArea: 'delete' }}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div style={formRowStyle}>
        <TextField
          id="feelings"
          type="text"
          fullWidth
          label="How did this book make you feel?"
          defaultValue={book.feelings}
          InputProps={{ readOnly: true }}
          maxRows={10}
        />
      </div>
      <div style={formRowStyle}>
        <TextField
          id="characters"
          type="text"
          fullWidth
          label="Who were your favourite characters?"
          defaultValue={book.characters}
          InputProps={{ readOnly: true }}
          maxRows={10}
        />
      </div>
      <div style={formRowStyle}>
        <TextField
          id="writingStyle"
          type="text"
          fullWidth
          label="What were your thoughts on the writing style?"
          defaultValue={book.writingStyle}
          InputProps={{ readOnly: true }}
          maxRows={10}
        />
      </div>
      <div style={formRowStyle}>
        <TextField
          id="notLiked"
          type="text"
          fullWidth
          label="Was there anything you didn't like?"
          defaultValue={book.notLiked}
          InputProps={{ readOnly: true }}
          maxRows={10}
        />
      </div>
      <div style={formRowStyle}>
        <TextField
          id="mostEnjoyed"
          type="text"
          fullWidth
          label="What did you most enjoy?"
          defaultValue={book.mostEnjoyed}
          InputProps={{ readOnly: true }}
          maxRows={10}
        />
      </div>
      <div style={formRowStyle}>
        <TextField
          id="other"
          type="text"
          fullWidth
          label="Any other comments?"
          defaultValue={book.other}
          InputProps={{ readOnly: true }}
          maxRows={10}
        />
      </div>
    </>
  );
}

export default View;
