import { useAppSelector } from '../../features/hooks';

function CheckoutPage() {
    const chefs = useAppSelector(state => state.chefs);
    const cart = useAppSelector(state => state.cart);

    console.log('check page', cart)
  
    return ( 
        <h1>Here you can checkout!</h1>
     );
}

export default CheckoutPage;