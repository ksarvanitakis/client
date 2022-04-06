import './Modal.scss'
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../features/hooks';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../index';
import { changeModalShowState } from '../../features/modal/modalSlice';
import { upDateUserCredentials } from '../../features/user/userSlice';
import Button from '../button/Button';

interface ModalProps {
    show: boolean,
    type: string
}

function Modal(props: ModalProps) {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)

    let header;
    let classTxt;
    let buttonTxt = '';

    switch (props.type) {
        case 'login':
            header = 'Login';
            classTxt = 'signin-form';
            buttonTxt = 'Log in';
            break;
        case 'signup':
            header = 'Sign up';
            classTxt = 'signup-form';
            buttonTxt = 'Sign up';
            break;
        default:
    }


    const closeOnEscapeKeyDown = (e: any) => {
        if ((e.charCode || e.keyCode) === 27) {
            dispatch(changeModalShowState(false))
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    if (!props.show) {
        return null;
    }

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        console.log('submitting from....')

        const submitfunction =
            props.type === 'signup-form' ?
                createUserWithEmailAndPassword
                :
                signInWithEmailAndPassword;
        try {
            const userCredentials = await submitfunction(auth, email, password);
            dispatch(upDateUserCredentials(userCredentials.user.email))
            setErr(false)
            dispatch(changeModalShowState(false))
        } catch (err) {
            setErr(true)
            console.log(err)
        }
    }

    return (
        <div className="modal" onClick={() => dispatch(changeModalShowState(false))}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h1 className="modal-title">{header}</h1>
                    {err && <h4 style={{ color: 'red' }}>The username or password is incorrect</h4>}
                </div>
                <div className="modal-body">
                    <form
                        id={classTxt}
                        className='form' >
                        <input
                            type="text"
                            placeholder="Email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </form>
                </div>
                <div className="modal-footer">
                    <Button
                        className="button"
                        btnText={buttonTxt}
                        bgColor='#C3E288'
                        hoverColor='#dbeeb7'
                        txtColor='#6B7755'
                        disabled={false}
                        handleClick={(e) => handleClick(e)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Modal;