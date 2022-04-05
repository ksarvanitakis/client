interface BookingSummaryInterface {
    booking: Booking2
}

function BookingSummaryCard({ booking }: BookingSummaryInterface) {
    return (
        <>
            <p>date: {booking.date}</p>
            <p>chef: {booking.chef}</p>
            <p>Menu:</p>
            <ul>
                {booking.dishes.map(dish => {
                    return <li>{dish.serving} of {dish.name}</li>
                })}
            </ul>
            <p>totalhours: {booking.totalhours}</p>
            <p>totalPrice: {booking.totalPrice}SEK</p>
        </>
    );
}

export default BookingSummaryCard;