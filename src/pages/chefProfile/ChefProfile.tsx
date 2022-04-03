import { useParams } from 'react-router-dom';
import MenuBoard from '../../components/menuBoard/MenuBoard';
import { useAppSelector } from '../../features/hooks';
import OrderSummary from '../../components/orderSummary/OrderSummary';
import Calendar from '../../components/calendar/Calendar';
import './ChefProfile.scss';


function ChefProfile() {

  const chefs = useAppSelector(state => state.chefs)
  const { name } = useParams();
  const chef = chefs.find(element => element.name === name) as Chef

  return (
    <>

      <h2>Chef's Profile</h2>
      <h1>{chef.name}</h1>
      <img
        className='card-container__profile__img'
        src={chef.profileImage} alt='profile'
        style={{ width: '200px', height: '200px' }}
      />
      <div className='booking-container'>
        <MenuBoard chef={chef} />
        <div className='booking-container_cal'>
          <Calendar />
        </div>
        <OrderSummary chef={chef} />
      </div>
    </>
  );
}

export default ChefProfile;