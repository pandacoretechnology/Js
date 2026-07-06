import React, { useReducer } from 'react';

// 1. Define the initial state structure
const initialState = { count: 0 };

// 2. Define the reducer function detailing actions
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
}

export default function ReducerCounterApp() {
  // 3. Initialize useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h3>5. useReducer Example (Structured State)</h3>
      <p>Count: <strong>{state.count}</strong></p>
      {/* Dispatch actions to the reducer */}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })} style={{ marginLeft: '5px' }}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })} style={{ marginLeft: '5px' }}>Reset</button>
    </div>
  );
}