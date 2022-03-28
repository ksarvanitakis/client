import React, { useEffect } from 'react';
import './App.css';

function App() {

  const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001/';
  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <p>Hello aliens</p>
    </div>
  );
}

export default App;
