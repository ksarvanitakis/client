import CheckoutButton from '../../components/checkoutButton/CheckoutButton';
import { useAppSelector } from '../../features/hooks';
import { updateShoppingList } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import StepsBoard from '../../components/stepsBoard/StepsBoard';
import OrderCard from '../../components/orderCard/orderCard';
import HeroSub from '../../components/header/HeroSub';
function CheckoutPage() {
    const cart = useAppSelector(state => state.cart);
    const dispatch = useDispatch();

    const shoppingList: Ingre[] = []
    let ingredientsSummary: Ingre[] = [];

    const convertUnits = () => {
        ingredientsSummary.forEach(el => {
            switch (el.unit) {
                case 'gr':
                    if (el.quantity >= 1000) {
                        el.quantity = (el.quantity / 1000);
                        el.unit = 'kg';
                    }
                    break;
                case 'ml':
                    if (el.quantity >= 1000) {
                        el.quantity = (el.quantity / 1000);
                        el.unit = 'Liter';
                    }
                    break;
            }
        })
    }

    useEffect(()=> {
        cart.dishes.forEach(el => {
            el.ingredients.forEach(e => {
                shoppingList.push({ name: e.name, quantity: e.quantity * el.serving, unit: e.unit })
            })
        })
    
        ingredientsSummary = shoppingList.reduce((ingredients: Ingre[], currentIngre) => {
            const index = ingredients.findIndex(v => v.name === currentIngre.name)
            if (index === -1) {
                ingredients.push(currentIngre)
            } else {
                const newIngre = {
                    ...currentIngre,
                    quantity: ingredients[index].quantity + currentIngre.quantity
                }
                ingredients[index] = newIngre;
            }
            return ingredients;
        }, []);

        convertUnits();
        dispatch(updateShoppingList(ingredientsSummary));
    
    }, [])

    console.log('check page', cart)    
    
    return (
        <>
            <HeroSub title={'Checkout'} />
            <OrderCard name={cart.chef.name} time={cart.totalhours} date={cart.date} price={cart.totalPrice} shopping={cart.shoppingList} dishes={cart.dishes}/>
            <CheckoutButton />
        </>
    );
}

export default CheckoutPage;