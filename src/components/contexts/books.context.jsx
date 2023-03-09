import React, { createContext, useState, useCallback, useEffect } from 'react';
import { STORAGE_KEY } from '../../settings.js';
import { nanoid } from 'nanoid';

export const BooksContext = createContext({
  addBook: () => {},
  deleteBook: () => {},
  books: [],
  // loading: false,
  // loaded: false,
  // error: null,
});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  });
  // const [loading, setLoading] = useState(false);
  // const [loaded, setLoaded] = useState(false);
  // const [error, setError] = useState(null);
  
  const addBook = useCallback(
    (formData) => {
      const newBook = {_id: nanoid(), ...formData};
      const newBooks = [newBook, ...books];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newBooks));
      setBooks(newBooks);
      console.log(`newBooks`, newBooks);
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
    },
    [books, setBooks],
  );
  

  return (
    <BooksContext.Provider
      value={{
        books,
        // loading,
        // loaded,
        // error,
        addBook,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
