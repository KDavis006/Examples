import React, { useState, useContext } from 'react';

// Create a context for managing theme
const ThemeContext = React.createContext();

// Component for toggling theme
export const ThemeSwitcher = ({ children }) => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Provide the theme context with value of dark mode and toggle function
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
