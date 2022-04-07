import './orderCard.scss'
interface Order {
    name: string
    time: number
    date: string
    price: number
    shopping: List[]
    dishes:Dishe[]
}
const OrderCard = ({ name, time, date, price, shopping,dishes }: Order) => {
    const convertMinToHr = (totalMinutes: number) => {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
        return `${hours}hr : ${minutes}min`
    }
    return (
        <>
            <section className='order-summary'>
                <div className='order-summary__bg-box'></div>
                <h1>Order Summary</h1>
                <div className='order-summary-container'>
                    <div className='order-summary-container__info'>
                        <h3>CHEF</h3>
                        <p>{name}</p>
                    </div>
                    <div className='order-summary-container__info'>
                        <h3>TIME</h3>
                        <p>{convertMinToHr(time)}</p>
                    </div >
                    <div className='order-summary-container__info'>
                        <h3>DATE</h3>
                        <p>{date}</p>
                    </div>
                    <div className='order-summary-container__info'>
                        <h3>PRICE</h3>
                        <p>{price} SEK</p>
                    </div>
                </div>
                <div  className='order-summary__menu'>
                    <h3>MENU</h3>
                    <ul>
                        {dishes.map(dish=>{
                            return <li>{dish.name} {dish.serving}  serving</li>
                        })}
                    </ul>
                </div>
                <div className='order-summary__shopping'>
                <h1>Shopping List</h1>
                {shopping.map((item, index) => {
                    if (item.quantity !== 0) {
                        return <p className='order-summary__shopping__item' key={index}>{item.name} {item.quantity} {item.unit}</p>
                    }
                })}
                </div>
                <div className='order-summary__bg-box-buttom'></div>
               
            </section>

        </>
    );
}

export default OrderCard;