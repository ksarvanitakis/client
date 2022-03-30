import './hero.scss';
import heroImage from './../../assets/heroImage.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Hero() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `chefs`; 
      navigate(path);
    }
    return (
        <>
            <main className='hero'>
                <div className='hero_text-container'>
                    <div className='hero_text-container_bg-box'></div>
                    <h1 className='hero_text-container_title'>Your Kitchen, Our Chef</h1>
                    <p className='hero_text-container_desc'>We bring professional chefs to your home to prepare delicious, customized meals at a fraction of the cost.</p>
                    <button onClick={routeChange}>Booking</button>
                </div>
                <div className='hero_image-container'>
                    <div className='hero_image-container_bg-box'></div>
                 <img className='hero_image-container_image' src={heroImage} alt='Hero'/>
                </div>
            </main>
        </>
    );
}

export default Hero;