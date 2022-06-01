import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      ad: 'ali baba ve 40 haramiler',
      yazar: 'ali ağaoğlu',
    },
    {
      id: 2,
      ad: 'balonla 5 hafta',
      yazar: 'ali ağaoğlu',
    },
    {
      id: 3,
      ad: 'insan ne ile yaşar?',
      yazar: 'ali ağaoğlu',
    },
  ]);

  const addBooks = (ad, yazar) => {
    setBooks([...books, { ad, yazar, id: uuid() }]);
  };

  const removeBooks = (id) => {
    const newBooks = books.filter((item) => item.id !== id);
    setBooks(newBooks);
  };

  return (
    <BookContext.Provider value={{ books, addBooks, removeBooks }}>
      {children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
