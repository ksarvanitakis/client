import './footer.scss'
import { BsInstagram } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

interface FooterProps {
    footer: string,
    description: string,
    id: number
}

function Footer({ footer, description, id }: FooterProps) {
    if (id === 0) {
        return <a className='footer-container_icon'><BsInstagram /></a>
    }
    if (id === 1) {
        return <a className='footer-container_icon'><BsPinterest /></a>
    }
    if (id === 2) {
        return <a className='footer-container_icon'><BsTwitter /></a>
    }
    if (id === 3) {
        return <a className='footer-container_icon'><BsFacebook /></a>
    }
}
return (
    <>
        <div className='footer-container'>

            <a className='footer-container_icon'><BsInstagram /></a>
            <div className='footer-container_text'>
                <a href=''>Becomne a chef</a>
                <a href=''>Book now</a>
            </div>
            <div >
                <p className='footer-container_text_des'>
                    © 2022 A Perfect Plate. All rights reserved. Site by The Alien Alliance.</p>
            </div>
        </div>
    </>
);
}

export default Footer;