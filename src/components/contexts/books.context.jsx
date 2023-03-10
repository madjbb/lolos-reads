import React, { createContext, useState, useCallback, useContext } from 'react';
import { STORAGE_KEY } from '../../settings.js';
import { nanoid } from 'nanoid';
import { SnackbarContext } from './snackbar.context.jsx';

export const BooksContext = createContext({
  addBook: () => {},
  deleteBook: () => {},
  updateBooks: () => {},
  books: [],
  // loading: false,
  // loaded: false,
  // error: null,
});

export const BooksProvider = ({ children }) => {
  const {openSnackbar} = useContext(SnackbarContext);
  const [books, setBooks] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  });
  // const [loading, setLoading] = useState(false);
  // const [loaded, setLoaded] = useState(false);
  // const [error, setError] = useState(null);
  
  const addBook = useCallback(
    (formData) => {
      const newBook = {_id: nanoid(), ...formData};
      const updatedBooks = [newBook, ...books];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
      setBooks(updatedBooks);
      console.log(`updatedBooks`, updatedBooks);
      openSnackbar({severity: 'success', message: 'Book review added!'})
    },
    [books, setBooks]
  );

  const deleteBook = useCallback(
    (id) => {
      const idx = books.findIndex((book) => (book._id === id));
      const updatedBooks = [...books.slice(0, idx), ...books.slice(idx + 1)];
      // [...cars.slice(0, index), ...cars.slice(index + 1)]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
      setBooks(updatedBooks);
      console.log(`newBooks`, updatedBooks);
      openSnackbar({severity: 'success', message: 'Book review deleted!'})
    },
    [books, setBooks],
  );

  const updateBook = useCallback(
    (id, formData) => {
      const idx = books.findIndex((book) =>(book._id === id));
      const oldBook = books[idx];
      console.log('oldBook', oldBook)
      // grab just the diffs
      let updates = {};
      for (const key of Object.keys(formData)) {
        if (formData[key] === `_id`) continue;
        if (formData[key] !== oldBook[key]) {
          updates[key] = formData[key];
        }
      };
      const updatedBook = {...oldBook, ...updates};
      console.log('updatedBook', updatedBook);
      const updatedBooks = [...books.slice(0, idx), updatedBook, ...books.slice(idx + 1)];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
      setBooks(updatedBooks);
      console.log('updatedBooks', updatedBooks);
      openSnackbar({severity: 'success', message: 'Book review updated!'})
    },
    [books, setBooks],
  )
  
  return (
    <BooksContext.Provider
      value={{
        books,
        // loading,
        // loaded,
        // error,
        addBook,
        deleteBook,
        updateBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
