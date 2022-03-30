import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ChefProfile from './pages/chefProfile/ChefProfile';
import LandingPage from './pages/landingPage/Landing'
import ListingPage from './pages/listing/Listing';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={< LandingPage />}/>
          <Route path='/chefs' element={< ListingPage />}/>
          <Route path='/chefs/:name' element={< ChefProfile />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
