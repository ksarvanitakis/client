import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import logo from '../../assets/my-private-chef-logo.png';
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '24px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#373a47'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#dbeeb7',
    padding: '1.5em 0em 1em 0em',
    fontSize: '1.5em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  bmItem: {
    display: 'inline-block',
    color: '#6B7755',
    textDecoration: 'none',
    padding: '0.3em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const stylesImg = {
  width: '100px',
  paddingTop: '1em'
}

const stylesDiv = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  background: '#dbeeb7'
}

function BurguerMenu() {
  let navigate = useNavigate();

  const routeChange = (path: string) => {
    return navigate(path);
  }

  return (
    <>
      <Menu styles={styles}>
        <Link to='/'>Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/howitworks' >How it works</Link>
        <Link to='/contact'>Contact</Link>
      </Menu>
      <div style={stylesDiv}>
        <img
          onClick={() => routeChange('/')}
          className='navBar__logo'
          src={logo} alt="Logo"
          style={stylesImg} />
        <Button
          className="Hero-Btn"
          btnText="Find your Chef"
          bgColor='#f9fcf2'
          hoverColor='#cce39f'
          txtColor='#6B7755'
          disabled={false}
          handleClick={() => routeChange('/chefs')} />
      </div>
    </>
  );
}

export default BurguerMenu;