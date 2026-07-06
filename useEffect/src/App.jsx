import React, { useState, useEffect } from 'react';

export default function DataFetcherApp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mimic an API fetch after component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setData(json.slice(0, 3)); // Grab first 3 users
        setLoading(false);
      });
  }, []); // Empty array ensures this runs only once on page load

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h3>2. useEffect Example (Data Fetching)</h3>
      {loading ? <p>Loading users...</p> : (
        <ul>
          {data.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      )}
    </div>
  );
}