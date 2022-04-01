import { Link } from 'react-router-dom'
import './card.scss'
interface CardProps {
  chef: Chef
}

function Card({ chef }: CardProps) {
  return (
    <div className="card-container">
      <Link to={`/chefs/${chef.name}`}>
        <div className='card-container__profile'>
          <div className='card-container__profile__bg-box'></div>
          <img className='card-container__profile__img' src={chef.profileImage} alt='profile' />
        </div>
        <p className='card-container__chef-name'>{chef.name}</p>
        <div className='card-container__text'>
          <p className='card-container__text__cusine'>{chef.cusine}</p>
          <p className='card-container__text__chef-desc'>{chef.description}</p>
          <p className='card-container__text__price'>200 SEK/hr</p>
        </div>
      </Link>

    </div>
  );
}

export default Card;
