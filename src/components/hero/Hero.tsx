import './hero.scss';
import heroImage from './../../assets/heroImage.png';
import { useNavigate } from "react-router-dom";
import Button from '../button/Button';
import StepsBoard from '../../components/stepsBoard/StepsBoard';

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
                        className="hero_btn"
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
            <body className='body'>
                <div className='body_text-container'>
                    <div className='body_text-container_bg-box-start'></div>
                    <h2 className='body_text-container_title'>Sound familiar? If so, this experience is for you.</h2>
                    <ul className='body_text-container_list'>
                        <li className='body_text-container_item'>- You’re too busy to prepare meals</li>
                        <li className='body_text-container_item'>- You’d rather spend time with your family or doing something you love</li>
                        <li className='body_text-container_item'>- You want healthy, home-cooked meals</li>
                        <li className='body_text-container_item'>- Meal delivery services are too expensive</li>
                        <li className='body_text-container_item'>- You want to experience something different</li>
                    </ul>
                    <hr className='body_text-container_line'></hr>
                    <div className='body_text-container_bg-box-end'></div>
                </div>
                <h2 className='steps-board-container-title'>How it works</h2>
            </body>
            <StepsBoard />
        </>
    );
}

export default Hero;