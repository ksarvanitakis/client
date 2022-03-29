interface CardProps {
  chef: Chef
}

function Card({ chef } : CardProps) {
  console.log(chef.image)
  return (
    <div className="card--container">
      <p>{chef.name}</p>
      <p>{chef.description}</p>
      <img src={chef.image[1]}/>
    </div>
  );
}

export default Card;
