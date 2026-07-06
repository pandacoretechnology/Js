import React, { useRef } from 'react';

export default function FocusApp() {
  // Create a reference placeholder
  const inputRef = useRef(null);
  const clickCountRef = useRef(0);

  const handleFocus = () => {
    // 1. Direct DOM manipulation: Focus the text input
    inputRef.current.focus();
    
    // 2. Update persistent variable without forcing a re-render
    clickCountRef.current += 1;
    console.log(`Focus button clicked ${clickCountRef.current} times`);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h3>4. useRef Example (DOM Input Focus)</h3>
      <input ref={inputRef} type="text" placeholder="Click button to focus me..." />
      <button onClick={handleFocus} style={{ marginLeft: '10px' }}>Focus Input</button>
      <p style={{ fontSize: '12px', color: 'gray' }}>*Check browser console to see persistent click count.</p>
    </div>
  );
}