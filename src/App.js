import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
function App() {
  return (
    <BookContextProvider>
      <div>
        <Navbar />
        <BookList />
        <BookForm />
      </div>
    </BookContextProvider>
  );
}

export default App;
