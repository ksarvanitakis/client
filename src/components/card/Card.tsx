import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setChef } from '../../features/cart/cartSlice';
import { AiOutlineStar } from 'react-icons/ai';

import './card.scss'
interface CardProps {
  chef: Chef
}

function Card({ chef }: CardProps) {

  const dispatch = useDispatch();

  return (
    <div className="card-container" onClick={() => dispatch(setChef(chef))}>
      <Link to={`/chefs/${chef.name}`}>
        <div className='card-container__profile'>
          <div className='card-container__profile__bg-box'></div>
          <img className='card-container__profile__img' src={chef.profileImage} alt='profile' />
        </div>
        <p className='card-container__chef-name'>{chef.name}</p>
        <div className='card-container__text'>
          <p className='card-container__text__cusine'>{chef.cusine}</p>
          <p className='card-container__text__chef-desc'>{chef.description}</p>
          <p className='card-container__text__price'>{chef.price} / hour</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
