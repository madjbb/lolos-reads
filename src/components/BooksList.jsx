import React, {useContext} from 'react';
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
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function BooksList({
  books = [],
  deleteHandler = () => console.log('No book deleteHandler provided'),
}) {
  return (
    <List>
      {books.map(({ title, rating, _id, avatarURL }) => (
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
              sx={{ width: '2em', height: '100%', border: '0.5px solid grey' }}
            >
              {avatarURL ? null : <AutoStoriesIcon sx={{ height: '2.4em' }} />}
            </Avatar>
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
          <IconButton aria-label="delete" onClick={() => deleteHandler(_id) } to={`/`}
            component={Link}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default BooksList;
