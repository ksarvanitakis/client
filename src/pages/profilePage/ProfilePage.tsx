import { useState, useEffect } from 'react'
import BookingSummaryCard from '../../components/bookingSummaryCard/BookingSummaryCard';
const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

function ProfilePage() {

    const [bookings, setBookings] = useState<Booking2[]>([]);

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
                return <BookingSummaryCard booking={booking} key={index} />
            })}
        </>
    );
}

export default ProfilePage;
