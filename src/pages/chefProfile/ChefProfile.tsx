import { useParams } from 'react-router-dom';
import MenuBoard from '../../components/menuBoard/MenuBoard';
import { useAppSelector } from '../../features/hooks';
import OrderSummary from '../../components/orderSummary/OrderSummary';
import './ChefProfile.scss';
import ProfileHero from '../../components/profileHero/ProfileHero';

function ChefProfile() {

  const chefs = useAppSelector(state => state.chefs)
  const { name } = useParams();
  const chef = chefs.find(element => element.name === name) as Chef

  return (
    <>
      <ProfileHero chef={chef} />
      <h2>Chef's Profile</h2>
      <h1>{chef.name}</h1>
      <img 
        className='card-container__profile__img'
        src={chef.profileImage} alt='profile' 
        style={{width:'100px', height:'100px'}}
        />
      <div className='booking-container'>
        <MenuBoard chef={chef} />
        <OrderSummary chef={chef} />
      </div>

    </>
  );
}

export default ChefProfile;