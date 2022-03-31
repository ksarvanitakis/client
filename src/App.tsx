import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ChefProfile from './pages/chefProfile/ChefProfile';
import LandingPage from './pages/landingPage/Landing'
import ListingPage from './pages/listing/Listing';
import About from './pages/about/About';
import Faq from './pages/faq/Faq';
import HowItWorks from './pages/howItWorks/HowItWorks';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={< LandingPage />}/>
          <Route path='/chefs' element={< ListingPage />}/>
          <Route path='/chefs/:name' element={< ChefProfile />}/>
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/howitworks' element={<HowItWorks/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
