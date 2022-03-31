import Board from '../../components/board/Board';
import { useEffect } from 'react';
import { fetchChefs } from '../../features/chefs/chefSlice';
import { useAppDispatch } from '../../features/hooks';

function ListingPage() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChefs());
  }, [])

  return (
    <div className="landingPage">
      <Board />
    </div>
  );
}

export default ListingPage;
