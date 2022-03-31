import { Link } from "react-router-dom";
import logo from '../../assets/my-private-chef-logo.png';
import './navBar.scss';
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";


function NavBar() {
    let navigate = useNavigate();

    const routeChange = (path:string) => {
        return navigate(path);
    }

    return (
        <nav className="navBar-container">
            <span className="navBar__sides">
                <Link to='/about'>About</Link>
                <Link to='/howitworks'>How it works</Link>
            </span>
            <span>
                <img
                    onClick={() => routeChange('/')}
                    className='navBar__logo'
                    src={logo} alt="Logo" />
            </span>
            <span className="navBar__sides">
                <Link to='/contact'>Contact</Link>
                <Button
                    className="Hero-Btn"
                    btnText="Find you Chef" 
                    bgColor='#f9fcf2' 
                    hoverColor='#cce39f' 
                    txtColor='#6B7755'
                    handleClick={() => routeChange('/chefs')} />
            </span>

        </nav>
    );
}

export default NavBar;