import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/navBar/NavBar';
import ChefProfile from './pages/chefProfile/ChefProfile';
import LandingPage from './pages/landingPage/Landing'
import ListingPage from './pages/listing/Listing';
import About from './pages/about/About';
import HowItWorks from './pages/howItWorks/HowItWorks';
import CheckoutPage from './pages/checkoutPage/checkoutPage';
import BurguerMenu from './components/burguerMenu/BurguerMenu';
import Footer from './components/footer/Footer';
import ProfilePage from './pages/profilePage/ProfilePage';
import LogIn from './pages/login/Login';
import SignUp from './pages/signup/Signup';

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
          <Route path='/' element={< LandingPage />}/>
          <Route path='/chefs' element={< ListingPage />}/>
          <Route path='/chefs/:name' element={< ChefProfile />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/howitworks' element={<HowItWorks/>}/>
          <Route path='/chefs/bookingpage' element={<CheckoutPage/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;