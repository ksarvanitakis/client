import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(():void => {
    fetch('https://myprivatechefserver.herokuapp.com/')
      .then(res => console.log(res));
  }, []);

  return (
    <div className="App">
      <p>Hello world</p>
    </div>
  );
}

export default App;
