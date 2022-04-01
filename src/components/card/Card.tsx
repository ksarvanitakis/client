import { Link } from 'react-router-dom'

interface CardProps {
  chef: Chef
}

function Card({ chef } : CardProps) {
  return (
    <div className="card--container">
      <Link to={`/chefs/${chef.name}`}>
      <p>{chef.name}</p>
      <p>{chef.description}</p>
      <img style={{ height: '15rem' }} src={chef.profileImage} alt='profile' />
      </Link>
      
    </div>
  );
}

export default Card;
