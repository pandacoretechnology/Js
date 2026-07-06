import React, { createContext, useContext, useState } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

export default function ThemeApp() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // 2. Provide the Context to children
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
        <h3>3. useContext Example (Theme Changer)</h3>
        <ParentComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function ParentComponent() {
  // Parent doesn't need the theme directly, it just renders Child
  return <ChildComponent />;
}

function ChildComponent() {
  // 3. Consume the Context directly in the nested child
  const { theme, toggleTheme } = useContext(ThemeContext);

  const boxStyle = {
    padding: '10px',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    border: '1px solid #000'
  };

  return (
    <div style={boxStyle}>
      <p>The current theme mode is <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}