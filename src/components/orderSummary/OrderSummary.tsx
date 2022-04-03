import './OrderSummary.scss';
// import './button/Button';
import { useNavigate } from "react-router-dom";
import Button from '../button/Button';


interface CardProps {
  chef: Chef
}

function OrderSummary({ chef }: CardProps) {

  let navigate = useNavigate();
  const routeChange = () => {
      let path = `/chefs/bookingpage`;
      navigate(path);
  }

  return (
    <>
      <section style={{ border: '2px solid gray', width: '15rem', height: '20rem' }}>
        <p>Number of dishes: </p>
        <p>Total time: </p>
      </section>
      <div>
        <Button 
          className="Btn"
          btnText="Checkout"
          handleClick={routeChange}
          bgColor='#f9fcf2'
          hoverColor='#dbeeb7'
          txtColor='#6B7755' />
      </div>
    </>
  );
}

export default OrderSummary;