import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { nanoid } from 'nanoid';

function BooksList() {
  const books = [
    {
      _id: nanoid(),
      title: `Maud's Line`,
      author: `Margaret Verble`,
      rating: 4,
      avatarURL: `https://m.media-amazon.com/images/I/51jKN-G8zUL.jpg`,
    },
    {
      _id: nanoid(),
      title: `The Great Circle`,
      author: `Maggie Shipstead`,
      rating: 3.5,
      avatarURL: `https://m.media-amazon.com/images/I/71awWTAcJQL.jpg`,
    },
  ];
  return (
    <List>
      {books.map(({ title, author, rating, _id, avatarURL }) => (
        <ListItem
          key={_id}
          sx={{ marginBottom: '0.5em', color: 'inherit' }}
          to={`/view/${_id}`}
          component={Link}
        >
          <ListItemAvatar>
            <Avatar
              variant="square"
              src={avatarURL}
              sx={{ width: '2em', height: '100%' }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={0.5}
                readOnly
              />
            }
          />
          <IconButton
            aria-label="update"
            to={`/update/${_id}`}
            component={Link}
          >
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default BooksList;
