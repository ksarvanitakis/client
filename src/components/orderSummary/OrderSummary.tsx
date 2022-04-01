import './OrderSummary.scss';

interface CardProps {
  chef: Chef
}

function OrderSummary({ chef }: CardProps) {



  return (
    <>
      <section>
        <p>Total time: </p>
        <p>Number of dishes: </p>
      </section>
    </>
  );
}

export default OrderSummary;