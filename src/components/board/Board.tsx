import Card from '../../components/card/Card';
import { useAppSelector } from '../../features/hooks';
import { useDispatch } from 'react-redux';
import './board.scss'
import { useEffect } from 'react';
import { createEmptyCart } from '../../features/cart/cartSlice';

function Board() {

  const chefs = useAppSelector((state) => state.chefs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createEmptyCart({}));
  }, []);

  return (
    <section className='board-container'>
      <div className="board-container__card">
        {chefs.map((chef: Chef, index: number) => {
          return <Card key={index} chef={chef} />
        })}
      </div>
    </section>
  );
}

export default Board;
