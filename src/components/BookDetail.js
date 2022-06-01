import React from "react";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export default function BookDetail({ book }) {
  const { removeBooks } = useContext(BookContext);

  return (
    <>
      <div onClick={() => removeBooks(book.id)} style={{ cursor: "pointer" }}>
        <li>
          <div>{book.ad}</div>
          <div>{book.yazar}</div>
        </li>
      </div>
    </>
  );
}
