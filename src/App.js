import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

  const [chefs, setChefs] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/chefs`)
      .then(res => res.json())
      .then(data => setChefs(data));
  }, []);

  return (
    <div className="App">
      {chefs.map(chef => chef.name)}
    </div>
  );
}

export default App;
