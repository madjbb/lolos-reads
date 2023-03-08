import React, { createContext, useState, useCallback, useEffect } from 'react';
import { STORAGE_KEY } from '../../settings.js';

export const BooksContext = createContext({
  addBook: () => {},
  books: [],
  loading: false,
  loaded: false,
  error: null,
});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const addBook = () => {};

  return (
    <BooksContext.Provider
      value={{
        books,
        loading,
        loaded,
        error,
        addBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
