import './hero.sass'
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <>
        <h1>Your Kitchen, Our Chef</h1>
        <p>We bring professional chefs to your home to prepare delicious, customized meals at a fraction of the cost.</p>
       <button><Link to='/chefs'>Chefs</Link></button>
        </>
     );
}

export default Hero;