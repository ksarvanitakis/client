import './hero.scss';
import heroImage from './../../assets/heroImage.png';
import { useNavigate } from "react-router-dom";
import Button from '../button/Button';

function Hero() {
    let navigate = useNavigate();
    const routeChange = () => {
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
                    <Button
                        className="Hero-Btn"
                        btnText="Booking"
                        handleClick={routeChange}
                        bgColor='#f9fcf2'
                        hoverColor='#dbeeb7'
                        disabled={false}
                        txtColor='#6B7755' />
                </div>
                <div className='hero_image-container'>
                    <div className='hero_image-container_bg-box'></div>
                    <img className='hero_image-container_image' src={heroImage} alt='Hero' />
                </div>
            </main>
        </>
    );
}

export default Hero;