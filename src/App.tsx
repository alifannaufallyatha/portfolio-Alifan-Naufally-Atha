import React from 'react';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/themeToogle';
import { themeClasses } from './utils/ThemeClasses';


function App() {
  return (
    <ThemeProvider>
      <div className={`min-h-screen ${themeClasses.background} ${themeClasses.section}`}>
        <ThemeToggle />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;