
import './App.css';
import { BookProvider } from './BookContext';
import Content from './Components/Content';
import Header from './Components/Header';

function App() {
  return (
    <BookProvider>
      <div className='App'>
        <Header />
        <Content />
      </div>
    </BookProvider>
  );
}

export default App;
