import './Form.scss';
import Button from '../button/Button';
import { useState } from 'react';
import { auth } from '../../index'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { upDateUserCredentials } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux';
import { changeModalShowState } from '../../features/modal/modalSlice';


interface Formprops {
    header: string,
    buttonTxt: string,
    formType: string
}


function Form({ header, buttonTxt, formType }: Formprops) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)
    const dispatch = useDispatch()


    const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        console.log('submitting from....')

        const submitfunction =
            formType === 'signup-form' ?
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
        <div className="form-container">
            <h1>{header}</h1>
            {err && <h4 style={{ color: 'red' }}>The username or password is incorrect</h4>}
            <form
                id={formType}
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
            <Button
                className="Submit-Btn"
                btnText={buttonTxt}
                bgColor='#C3E288'
                hoverColor='#dbeeb7'
                txtColor='#6B7755'
                disabled={false}
                handleClick={(e) => handleClick(e)}
            />
        </div>
    );
}
export default Form;