import Card from '../../components/card/Card';
import { useAppSelector } from '../../features/hooks';
import './board.scss'
function Board() {
  const chefs = useAppSelector((state) => state.chefs);
  
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
