import React from 'react'
import PropDrillingExample from './Components/1-Example'
import ContextAPI from './Components/3-Example'
import { ThemeSwitcher } from './Components/2-Example.jsx/ThemeSwitcher'
import { useTheme } from './Components/2-Example.jsx/ThemeSwitcher'

const App = () => {
  return (
    <div>
      <PropDrillingExample />
      <ContextAPI />
      <ThemeSwitcher>
        <AppContent />
      </ThemeSwitcher>
    </div>
  )
}

const AppContent = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="content">
        <h1 className={darkMode ? 'dark-text' : ''}>Your App</h1>
        <label className="toggle-switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default App