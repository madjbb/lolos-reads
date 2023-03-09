import React, { createContext, useState, useCallback, useEffect } from 'react';
import { STORAGE_KEY } from '../../settings.js';
import { nanoid } from 'nanoid';

export const BooksContext = createContext({
  addBook: () => {},
  books: [],
  // loading: false,
  // loaded: false,
  // error: null,
});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
      {
        _id: nanoid(),
        title: `Maud's Line`,
        rating: 4,
        avatarURL: `https://m.media-amazon.com/images/I/51jKN-G8zUL.jpg`,
      },
      {
        _id: nanoid(),
        title: `Great Circle`,
        rating: 3.5,
        avatarURL: `https://m.media-amazon.com/images/I/71awWTAcJQL.jpg`,
      },
    ];
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

  return (
    <BooksContext.Provider
      value={{
        books,
        // loading,
        // loaded,
        // error,
        addBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
