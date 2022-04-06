import './footer.scss'
import { AiFillInstagram } from 'react-icons/ai'
import { ImPinterest } from 'react-icons/im';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdOutlineFacebook } from 'react-icons/md';


function Footer() {

    return (

        <div className='footer-container'>
            <div className='footer-container_img'>
                <a className='footer-container_icon'><AiFillInstagram size={35} /></a>
                <a className='footer-container_icon'><ImPinterest size={35} /></a>
                <a className='footer-container_icon'><AiFillTwitterCircle size={35} /></a>
                <a className='footer-container_icon'><MdOutlineFacebook size={35} /></a>
            </div>
            <div className='footer-container_text'>
                <a href='' className='footer-container_text-link'>BECOME A CHEF</a>
                <a href='' className='footer-container_text-link'>BOOK NOW</a>
            </div>
            <div className='footer-container_text_tag'>
                <span className='footer-container_text_des'>
                    © 2022 My Private Chef. All rights reserved. Site by The Alien Alliance.</span>
            </div>
        </div>

    );
}

export default Footer;