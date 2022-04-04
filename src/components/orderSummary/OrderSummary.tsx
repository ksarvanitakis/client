import './OrderSummary.scss';
// import './button/Button';
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../../features/hooks';
import Button from '../button/Button';


interface CardProps {
  chef: Chef
}

function OrderSummary({ chef }: CardProps) {
  const cart = useAppSelector(state => state.cart);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/chefs/bookingpage`;
    navigate(path);
  }
  const convertMinToHr = (totalMinutes:number) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${hours}hr : ${minutes}min`
  }
  const ableCheckoutBtn = (time:number) =>{
    console.log(time,'disable btn')
   if(time>=300 && time<=480){
     return false
   }
   else return true
  }

  return (
    <>
      <section style={{ border: '2px solid gray', width: '15rem', height: '20rem' }}>
        <p>Number of dishes: {cart.dishes.length} </p>
        {cart.dishes.map((el: Dishe) => {
          return <div>
            <p>{el.serving}</p>
            <p>{el.name}</p>
          </div>
        })}
        <p>Total time:{convertMinToHr(cart.totalhours)} </p>
        {ableCheckoutBtn(cart.totalhours)?<p>* You can book chefs for min 5hr and max 6hr</p>:''}
        <p>{cart.date}</p>
      </section>
      <div>
        <Button
          className="Btn"
          btnText="Checkout"
          handleClick={routeChange}
          bgColor='#D3D3D3'
          hoverColor='#D3D3D3'
          txtColor='#6B7755'
          disabled={ableCheckoutBtn(cart.totalhours)} />
      </div>
    </>
  );
}

export default OrderSummary;