// filepath: c:\folder mata kuliah\portofolio\portfolio-tsx\src\components\ThemeToggle.tsx
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-4 top-4 z-50 p-3 rounded-full 
        bg-gray-200 dark:bg-gray-700 
        hover:bg-gray-300 dark:hover:bg-gray-600 
        transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaMoon className="text-gray-800 text-xl" />
      ) : (
        <FaSun className="text-yellow-400 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;