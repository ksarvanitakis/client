import './navBar.scss';
import { HiUserCircle, HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useAppDispatch } from '../../features/hooks';
import { auth } from '../../index';
import { changeModalShowState } from '../../features/modal/modalSlice';

import logo from '../../assets/my-private-chef-logo.png';
import Button from "../button/Button";

function NavBar() {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [loggedIn, setloggedInStatus] = useState(false);

    onAuthStateChanged(auth, user => {
        if (user) {
            setloggedInStatus(true)
        } else {
            setloggedInStatus(false)
        }
    })

    const routeChange = (path: string) => {
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
                <Button
                    className="Hero-Btn"
                    btnText="Find your Chef"
                    bgColor='#f9fcf2'
                    hoverColor='#cce39f'
                    txtColor='#6B7755'
                    disabled={false}
                    handleClick={() => routeChange('/chefs')} />
                <div className='navbar-user__container'>
                    <span className='navbar-user__icon'><HiMenu /></span>
                    <span className='navbar-user__icon'><HiUserCircle /></span>
                    <div className='dropdown-content'>
                        {loggedIn ?
                            <>
                                <p>
                                    <Button
                                        className="LogOut-Btn"
                                        btnText="Log out"
                                        bgColor='#f9fcf2'
                                        hoverColor='#dbeeb7'
                                        txtColor='#6B7755'
                                        disabled={false}
                                        handleClick={() => {
                                            signOut(auth)
                                            navigate('/')
                                        }}
                                    />
                                </p>
                                <p>
                                    <Link to='/profile'>My bookings</Link>
                                </p>
                            </>
                            :
                            <>
                                <p>
                                    <Button
                                        className="Btn"
                                        btnText="Log in"
                                        bgColor='#f9fcf2'
                                        hoverColor='#dbeeb7'
                                        txtColor='#6B7755'
                                        disabled={false}
                                        handleClick={() => {
                                            dispatch(changeModalShowState({
                                                show: true,
                                                type: 'login'
                                            }))
                                        }} />
                                </p>
                                <p>
                                    <Button
                                        className="Btn"
                                        btnText="Sign up"
                                        bgColor='#f9fcf2'
                                        hoverColor='#dbeeb7'
                                        txtColor='#6B7755'
                                        disabled={false}
                                        handleClick={() => {
                                            dispatch(changeModalShowState({
                                                show: true,
                                                type: 'signup'
                                            }))
                                        }} />
                                </p>
                            </>
                        }
                    </div>
                </div>
            </span>
        </nav>
    );
}

export default NavBar;