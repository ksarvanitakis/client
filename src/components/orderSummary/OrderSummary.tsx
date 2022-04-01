import './OrderSummary.scss';

interface CardProps {
  chef: Chef
}

function OrderSummary({ chef }: CardProps) {



  return (
    <>
      <section style={{border:'2px solid gray', width:'15rem', height:'20rem' }}>
        <p>Number of dishes: </p>
        <p>Total time: </p>
      </section>
    </>
  );
}

export default OrderSummary;