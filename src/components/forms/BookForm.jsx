import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const schema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  avatarURL: yup.string().url(),
  feelings: yup.string(),
  characters: yup.string(),
  writingStyle: yup.string(),
  notLiked: yup.string(),
  mostEnjoyed: yup.string(),
  other: yup.string(),
  rating: yup.number().required(),
});

const defaults = {
  title: '',
  author: '',
  avatarURL: '',
  feelings: '',
  characters: '',
  writingStyle: '',
  notLiked: '',
  mostEnjoyed: '',
  other: '',
  rating: '',
};

function BookForm({ book, submitHandler=(() => {}) }) {
  const {
    handleSubmit,
    reset,
    control,
    formState,
    formState: { isDirty, isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: book || defaults,
  });

  // useEffect(() => {
  //   console.log(formState);
  // });

  // pre-populate form if book passed (i.e. when updating)?
  useEffect(() => {
    if (book) {
      reset(book);
    }
  }, [book, reset]);

  const formRowStyle = {
    marginBlockEnd: '1em',
  };

  let submitFn = (vals) => {
    reset();
    console.log(`vals`, vals);
    // submitHandler(vals);
    // for updating as well as adding
    book ? submitHandler(book._id, vals) : submitHandler(vals);
  };

  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="title"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="Title"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="author"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="Author"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="avatarURL"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="Book Image URL"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="feelings"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="How did this book make you feel?"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              multiline
              // rows={5}
              maxRows={10}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="characters"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="characters"
              {...field}
              label="Who were your favourite characters?"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              multiline
              // rows={5}
              maxRows={10}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="writingStyle"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="What were your thoughts on the writing style?"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              multiline
              // rows={5}
              maxRows={10}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="notLiked"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="Was there anything you didn't like?"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              multiline
              // rows={5}
              maxRows={10}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="mostEnjoyed"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="What did you most enjoy?"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              multiline
              // rows={5}
              maxRows={10}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="other"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="text"
              {...field}
              label="Any other comments?"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              multiline
              // rows={5}
              maxRows={10}
            />
          )}
        />
      </div>
      <div style={formRowStyle}>
        <Controller
          control={control}
          name="rating"
          defaultValue={''}
          render={({ field }) => (
            <TextField
              type="number"
              {...field}
              label="Rating (out of 5)"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </div>
      <div
        style={{
          marginTop: '0.5em',
          display: 'flex',
          gap: '0.5em',
          justifyContent: 'space-between',
        }}
      >
        <Button
          type="reset"
          onClick={() => reset()}
          variant="contained"
          disabled={!isDirty}
          size="large"
          sx={{ flex: 'auto' }}
        >
          Reset
        </Button>
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting || !isDirty || (isDirty && !isValid)}
          primary="true"
          size="large"
          sx={{ flex: 'auto' }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default BookForm;
