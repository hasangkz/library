import React from "react";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
export default function Navbar() {
  const { books } = useContext(BookContext);
  return (
    <>
      {books.length ? (
        <h1>{books.length} tane kitap var!</h1>
      ) : (
        <h1>Hiç kitap kalmadı...</h1>
      )}
    </>
  );
}
