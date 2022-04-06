import CheckoutButton from '../../components/checkoutButton/CheckoutButton';
import { useAppSelector } from '../../features/hooks';


function CheckoutPage() {
    const cart = useAppSelector(state => state.cart);

    console.log('check page', cart)

    const shoppingList: Ingre[] = []

    cart.dishes.forEach(el => {
        el.ingredients.forEach(e => {
            shoppingList.push({ name: e.name, quantity: e.quantity * el.serving, unit: e.unit })
        })
    })

    const ingredientsSummary = shoppingList.reduce((ingredients: Ingre[], currentIngre) => {
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

    convertUnits();

    return (
        <>
            <h1>Shopping List</h1>
            {ingredientsSummary.map((item, index) => {
                if (item.quantity !== 0) {
                    return <p key={index}>{item.name} {item.quantity} {item.unit}</p>
                }
            })}
            <CheckoutButton />
        </>
    );
}

export default CheckoutPage;