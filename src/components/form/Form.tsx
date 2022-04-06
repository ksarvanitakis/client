import './Form.scss';
import Button from '../button/Button';
import { useState } from 'react';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../../index'


interface Formprops {
    header: string,
    buttonTxt: string,
    formType: string
}


function Form({ header, buttonTxt, formType }: Formprops) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        console.log('submitting from....')

        const submitfunction =
            formType === 'signup-form' ?
                createUserWithEmailAndPassword
                :
                signInWithEmailAndPassword;

        const userCredentials = await submitfunction(auth, email, password);
        console.log(userCredentials.user)
    }


    return (
        <div className="form-container">
            <h1>{header}</h1>
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