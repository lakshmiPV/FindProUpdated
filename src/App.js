import logo from './logo.svg';
import './App.css';
import Books from './Books';
import { Route, Routes } from 'react-router-dom';
import BooksList from './BooksList';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Books/>} />
        <Route path="/bookslist" element={<BooksList/>} />
      </Routes>
    </>
  );
}

export default App;
