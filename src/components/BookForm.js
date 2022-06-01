import React, { useState } from 'react';
import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

export default function BookForm() {
  const { addBooks } = useContext(BookContext);
  const [ad, setAd] = useState('');
  const [yazar, setYazar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks(ad, yazar);
    setAd('');
    setYazar('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Kitap Adı: </label>
        <input
          placeholder='Kitabın adı...'
          type='text'
          required
          value={ad}
          onChange={(e) => setAd(e.target.value)}
        />
        <br />
        <br />
        <label>Yazar Adı: </label>
        <input
          placeholder='Yazarın ismi...'
          type='text'
          required
          value={yazar}
          onChange={(e) => setYazar(e.target.value)}
        />
        <br />
        <br />
        <button type='submit' style={{ cursor: 'pointer' }}>
          Ekle
        </button>
      </form>
    </>
  );
}
