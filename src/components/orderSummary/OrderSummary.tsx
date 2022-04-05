import './OrderSummary.scss';
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../../features/hooks';
import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { updatePrice } from '../../features/cart/cartSlice';

interface CardProps {
  chef: Chef
}

function OrderSummary({ chef }: CardProps) {

  const cart = useAppSelector(state => state.cart);

  console.log(cart)
  const dispatch = useDispatch()

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/chefs/bookingpage`;
    navigate(path);
  }
  const convertMinToHr = (totalMinutes: number) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${hours}hr : ${minutes}min`
  }

  const ableCheckoutBtn = (time: number) => {
    if (time >= 300 && time <= 480) {
      return false
    }
    else return true
  }

  const setTotalPrice = (totalMinutes: number) => {
    const totalPrice = Math.floor((totalMinutes / 60) * chef.price);
    dispatch(updatePrice(totalPrice));
    return totalPrice;
  }

  return (
    <>
      <section className='summary-container'>
        <div className='summary-container_info'>
          <h1>Order Summary</h1>
          <div className='summary-container_info_order'>
            <p><span className='summary-container_info_order_Bold-text'>Booked date: </span>{cart.date}</p>
            <p><span className='summary-container_info_order_Bold-text'>Total time: </span>{convertMinToHr(cart.totalhours)} </p>
            <p><span className='summary-container_info_order_Bold-text'>Total Price:</span> {setTotalPrice(cart.totalhours)}</p>
            {cart.dishes.map((el: Dishe) => {
              if (el.serving !== 0) {
                return <p> {el.name} {el.serving}</p>
              }
            })}
          </div>
          {ableCheckoutBtn(cart.totalhours) ? <p className='summary-container_info_error-message'>* You can book chef for min 5hr and max 8hr</p> : ''}
        </div>
        <div>
          <Button
            className="Btn"
            btnText="Checkout"
            handleClick={routeChange}
            bgColor={ableCheckoutBtn(cart.totalhours) ? '#D3D3D3' : '#f9fcf2'}
            hoverColor={ableCheckoutBtn(cart.totalhours) ? '#D3D3D3' : '#cce39f'}
            txtColor='#6B7755'
            disabled={ableCheckoutBtn(cart.totalhours)} />
        </div>
      </section>
    </>
  );
}

export default OrderSummary;