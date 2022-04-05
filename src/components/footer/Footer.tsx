import './footer.scss'
import { FaInstagramSquare } from 'react-icons/fa'
import { ImPinterest } from 'react-icons/im';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdOutlineFacebook } from 'react-icons/md';


function Footer() {

    return (

        <div className='footer-container'>
            <div className='footer-container_img'>
                <a className='footer-container_icon'><FaInstagramSquare size={30} /></a>
                <a className='footer-container_icon'><ImPinterest size={30} /></a>
                <a className='footer-container_icon'><AiFillTwitterCircle size={30} /></a>
                <a className='footer-container_icon'><MdOutlineFacebook size={30} /></a>
            </div>
            <div className='footer-container_text'>
                <a href='' className='footer-container_text-link'>BECOME A CHEF</a>
                <a href='' className='footer-container_text-link'>BOOK NOW</a>
            </div>
            <div className='footer-container_text_tag'>
                <span className='footer-container_text_des'>
                    © 2022 A Perfect Plate. All rights reserved. Site by The Alien Alliance.</span>
            </div>
        </div>

    );
}

export default Footer;