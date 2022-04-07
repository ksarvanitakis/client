import { useAppSelector } from '../../features/hooks';
import Button from '../button/Button';
import { useNavigate } from "react-router-dom";
const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';


function CheckoutButton() {
    let navigate = useNavigate();

    const cart = useAppSelector(state => state.cart)

    const bookingInformation = {
        ...cart,
        chef: cart.chef.name,
    }
// const route = ()=>{
//     let path = `order`;
//     navigate(path);
// }
    async function postBooking() {
        
        const response = await fetch(`${baseUrl}/api/booking`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingInformation)
        });
       
       

    
        return response.json()
    }

    return (
        <Button
            className="Checkout-Btn"
            btnText="Confirm & Checkout"
            handleClick={postBooking}
            bgColor='#dbeeb7'
            hoverColor='#f9fcf2'
            disabled={false}
            txtColor='#6B7755' />
    );
}

export default CheckoutButton;