import store from '../../features/store'
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../features/hooks';
import { fetchChefs } from '../../features/chefs/chefSlice';
import MenuBoard from '../../components/menuBoard/MenuBoard';
import OrderSummary from '../../components/orderSummary/OrderSummary';
import Calendar from '../../components/calendar/Calendar';
import ProfileHero from '../../components/profileHero/ProfileHero';
import CheckoutButton from '../../components/checkoutButton/CheckoutButton';
import './ChefProfile.scss';

function ChefProfile() {

  const chefs = useAppSelector(state => state.chefs)
  const dispatch = useAppDispatch();

  const { name } = useParams();
  const [chef, setChef] = useState(chefs.find(element => element.name === name) as Chef);

  if (!chef) {
    const getChef = async () => {
      const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';
      const data = await fetch(`${baseUrl}/chefs`);
      const json = await data.json() as Chef[];
      const result = json.find(element => element.name === name);
      setChef(result as Chef);
    }
  }

  return (
    <>
      <ProfileHero chef={chef} />
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
      <div>
        <CheckoutButton />
      </div>
    </>
  );
}

export default ChefProfile;