import Board from '../../components/board/Board';
import { useEffect } from 'react';
import { fetchChefs } from '../../features/chefs/chefSlice';
import { useAppDispatch } from '../../features/hooks';
import StepsBoard from '../../components/stepsBoard/StepsBoard';
import HeroSub from '../../components/header/HeroSub';
import './Listing.scss';

function ListingPage() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChefs());
  }, [])

  return (
    <>
      <HeroSub title={'Choose your chef'} />
      <div className="landingPage">
        <Board />
      </div>
    </>
  );
}

export default ListingPage;
