import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {

  return (
    <div className="landingPage">
      <button>
        <Link to='/chefs'>Chefs</Link>
      </button>
    </div>
  );
}

export default LandingPage;
