import { useState, useEffect } from 'react'
import OrderCard from '../../components/orderCard/orderCard';
import { useAppSelector } from '../../features/hooks';

const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

function ProfilePage() {

    const [bookings, setBookings] = useState<Booking2[]>([]);
    const cart = useAppSelector(state => state.cart);

    const fetchUserBookings = async () => {
        const data = await fetch(`${baseUrl}/api/users/Mr.Bean`);
        const bookingData = await data.json() as unknown as Booking2[]
        console.log(bookingData)
        setBookings(bookingData)
    }

    useEffect(() => {
        fetchUserBookings()
    }, [])

    return (
        <>
            <h1>Profile</h1>
            {bookings.map((booking, index) => {
                return <OrderCard name={cart.chef.name} time={cart.totalhours} date={cart.date} price={cart.totalPrice} shopping={cart.shoppingList} dishes={cart.dishes} />

            })}
        </>
    );
}

export default ProfilePage;
