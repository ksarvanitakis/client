import Card from '../../components/card/Card';
import { useAppSelector } from '../../features/hooks';

function Board() {
  const chefs = useAppSelector((state) => state.chefs);
  
  return (
    <div className="board--container">
      {chefs.map((chef: Chef, index: number) => {
        return <Card key={index} chef={chef} />
      })}
    </div>
  );
}

export default Board;
