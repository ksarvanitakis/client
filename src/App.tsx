import React, { useEffect } from 'react';
import './App.css';

function App() {

  const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001/';
  useEffect(():void => {
    fetch(baseUrl)
      .then(res => console.log(res));
  }, []);

  return (
    <div className="App">
      <p>Hello world</p>
    </div>
  );
}

export default App;
