import './App.css';
import MainPage from './Component/MainPage';
import { useState } from 'react';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const [isDark, setIsDark ] = useState(false)
  return (
    // 객체로 넣어줌
    <ThemeContext.Provider value={{isDark, setIsDark}}>
        <div className="App">
          <MainPage />
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
