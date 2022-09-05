import './App.css';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';
import ThemeContextProvider from './contextapp/ThemeContext';
function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <BooksList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
