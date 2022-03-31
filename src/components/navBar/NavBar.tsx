import { Link } from "react-router-dom";
import logo from '../../assets/my-private-chef-logo.png';
import './navBar.scss';
import { useNavigate } from "react-router-dom";


function NavBar() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }

    return (
        <nav className="navBar-container">
            <span className="navBar__sides">
                <Link to='/about'>About</Link>
                <Link to='/howitworks'>How it works</Link>
            </span>
            <span>
                <img
                    onClick={routeChange}
                    className='navBar__logo'
                    src={logo} alt="Logo" />
            </span>
            <span className="navBar__sides">
                <Link to='/contact'>Contact</Link>
                <Link to='/chefs'>Find you Chef</Link>
            </span>

        </nav>
    );
}

export default NavBar;