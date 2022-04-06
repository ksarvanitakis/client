import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ChefProfile from './pages/chefProfile/ChefProfile';
import LandingPage from './pages/landingPage/Landing'
import ListingPage from './pages/listing/Listing';
import About from './pages/about/About';
import Faq from './pages/faq/Faq';
import HowItWorks from './pages/howItWorks/HowItWorks';
import CheckoutPage from './pages/checkoutPage/checkoutPage';
import BurguerMenu from './components/burguerMenu/BurguerMenu';
import { useState, useEffect } from 'react';
import Footer from './components/footer/Footer';


function App() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  return (
    <div className="App">
      <Router>
        {screenSize.dynamicWidth > 400 ? <NavBar /> : <BurguerMenu />}

        <Routes>
          <Route path='/' element={< LandingPage />} />
          <Route path='/chefs' element={< ListingPage />} />
          <Route path='/chefs/:name' element={< ChefProfile />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/howitworks' element={<HowItWorks />} />
          <Route path='/chefs/bookingpage' element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;