import React, { useState } from 'react';

export default function CounterApp() {
  // Declare a state variable named "count", initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>1. useState Example (Counter)</h3>
      <p>You clicked {count} times</p>
      {/* Update state using the setter function */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
}