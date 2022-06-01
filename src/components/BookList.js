import React from "react";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetail from "./BookDetail";

export default function BookList() {
  const { books } = useContext(BookContext);

  return (
    books.length && (
      <div>
        <ul>
          {books.map((item) => (
            <BookDetail book={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  );
}
