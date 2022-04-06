import { useParams } from 'react-router-dom';
import MenuBoard from '../../components/menuBoard/MenuBoard';
import { useAppSelector } from '../../features/hooks';
import OrderSummary from '../../components/orderSummary/OrderSummary';
import Calendar from '../../components/calendar/Calendar';
import './ChefProfile.scss';
import ProfileHero from '../../components/profileHero/ProfileHero';
import StepsBoard from '../../components/stepsBoard/StepsBoard';

function ChefProfile() {

  const chefs = useAppSelector(state => state.chefs)

  const { name } = useParams();
  const chef = chefs.find(element => element.name === name) as Chef
  console.log(chef)
  return (
    <>
      <ProfileHero chef={chef} />

      <StepsBoard stepActiveIndex={1} small/>

      <div className='header-container'>
        <div className='header-container__chef-info'>
          <h1>{chef.name}</h1>
          <p className='header-container__chef-info__cusine'>{chef.cusine}</p>
          <p className='header-container__chef-info__price'>{chef.price} SEK/hr</p>
        </div>
         <img
          className='header-container__chef-img'
          src={chef.profileImage} alt='profile'
          style={{ width: '80px', height: '80px' }}
        />
      </div>
      <Calendar chef={chef} />
      <div className='booking-container'>
        <MenuBoard chef={chef} />
        <OrderSummary chef={chef} />
      </div>
    </>
  );
}

export default ChefProfile;